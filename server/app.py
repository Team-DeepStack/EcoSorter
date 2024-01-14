from typing import Union
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import io


import PIL
import timm
import pandas as pd
import numpy as np
import cv2
import torch
from torch.utils.data import DataLoader, Dataset
import torch.nn as nn
import torchvision.models as models
import albumentations as A
from albumentations.pytorch import ToTensorV2
from PIL import Image
# categories = {0: 'paper', 1: 'cardboard', 2: 'plastic', 3: 'metal', 4: 'trash', 5: 'battery',
#               6: 'shoes', 7: 'clothes', 8: 'green-glass', 9: 'brown-glass', 10: 'white-glass',
#               11: 'biological'}

categories = {
#     0: 'paper', 
              0: 'cardboard', 
              1: 'plastic', 
              2: 'metal', 
              3: 'trash', 
#               5: 'battery',
              4: 'shoes', 
              5: 'clothes', 
              6: 'green-glass', 
              7: 'brown-glass', 
              8: 'white-glass',
              9: 'biological'}
device = 'cpu'

app = FastAPI(debug=True)

origins = [
    "http://localhost:3000",  # React app
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TestDataset(Dataset):
    def __init__(self, img, transform=None):
        #super(TestDataset,self).__init__()
        #self.df = df
        self.image = img#df['img'].values
        self.transform = transform
        
    def __len__(self):
        return len(self.df)

    def __getitem__(self, idx):
        #file_name = self.file_names[idx]
        #file_path = file_name
        image = self.image #cv2.imread(file_path)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        if self.transform:
            augmented = self.transform(image=image)
            image = augmented['image']
        return image
class CFG:
    model_name = 'resnet18'
    target_size = 10
    size = 256
    batch_size = 64
    epochs = 1
    num_workers = 0
    lr = 1e-3
    weight_decay = 1e-2
    train = True
    target_col = 'tar'
def get_transforms(*, data):
    if data == 'train':
        return A.Compose([
            A.Resize(CFG.size, CFG.size),
            #A.RandomResizedCrop(CFG.size, CFG.size),
            #A.HorizontalFlip(p=0.5),
            A.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225],
            ),
            ToTensorV2(),
        ])

    elif data == 'valid':
        return A.Compose([
            A.Resize(CFG.size, CFG.size),
            A.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225],
            ),
            ToTensorV2(),
        ])
class CustomNet(nn.Module):
    def __init__(self, model_name=CFG.model_name, pretrained=False):
        super().__init__()
        self.model = timm.create_model(CFG.model_name, pretrained=pretrained)
        #print(self.model.default_cfg["classifier"])
        n_features = self.model.fc.in_features #either fc or classifier , check using above line
        self.model.fc = nn.Linear(n_features, CFG.target_size)

    def forward(self, x):
        x = self.model(x)
        return x
def test_fun(image, model, device):
    #images = image#.to(device)
    with torch.no_grad():
        shape=image.shape
        y_preds = model(image.view(1,shape[0],shape[1],shape[2]))
    #preds.append(y_preds.softmax(1).numpy())
    predictions = y_preds.softmax(1).numpy()
    # print(predictions)
    pred = predictions.argmax(1)
    return pred
def predict(image_arr):
    #test=pd.DataFrame({
    #    "path" : [image_pth]
    #    })
    test_dataset = TestDataset(image_arr, transform=get_transforms(data='valid'))
    #test_loader = DataLoader(test_dataset, batch_size=1, shuffle=False, 
#                            num_workers=CFG.num_workers, pin_memory=True, drop_last=False)

    check_point = torch.load('./resnet18_best.pth',map_location=torch.device('cpu'))
    model = CustomNet(CFG.model_name, pretrained=True)
    #model.to(device)
    model.load_state_dict(check_point['model'])
    pred = test_fun(test_dataset[0], model, 'cpu')
    # print(pred)
    return categories[pred[0]]
# predicted = predict(cv2.imread('green-glass1.jpg'))
# print(predicted)


@app.get("/")
def root_func():
    return {"Hello":"World"}

@app.post("/api/predict")
async def fetch_predictions(file: UploadFile=File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    numpy_array = np.array(image)
    prediction = predict(numpy_array)
    return {"prediction": prediction}

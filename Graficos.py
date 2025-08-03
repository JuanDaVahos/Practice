import numpy as np
import pandas as pd
import matplotlib as plt

url = "https://github.com/JuanDaVahos/Practice/raw/refs/heads/main/Entradas_de_extranjeros_a_Colombia_20250803.csv"

df = pd.DataFrame(url, sep=",")
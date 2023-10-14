import pymongo
from src.singleton import Singleton


class MongoDBClient(metaclass=Singleton):
    def __init__(self):
        conn = pymongo.MongoClient('mongodb://root:pass@localhost:27017/')
        db = conn['database']
        coll = db['collection']

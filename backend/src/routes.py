from fastapi import APIRouter

volunteer_router = APIRouter(prefix="/volunteer-work")
users_router = APIRouter(prefix="/users")


@users_router.post("/signup")
def signup():
    pass


@users_router.post("/login")
def login():
    pass


@volunteer_router.post("/")
def create_volunteer_work():
    pass

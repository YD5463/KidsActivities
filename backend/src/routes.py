from fastapi import APIRouter

volunteer_router = APIRouter(prefix="/volunteer-work")
users_router = APIRouter(prefix="/users")


@users_router.post("/signup")
def signup():
    pass


@users_router.post("/login")
def login():
    pass

# TODO: add api-key middleware


@volunteer_router.post("/create")
def create_volunteer_work():
    pass


@volunteer_router.get("/")
def get_volunteer_works(page: int):  # TODO: pagination, filters like locations etc,
    pass


@volunteer_router.put("/join")
def join_existing_work():
    pass


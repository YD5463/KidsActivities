import logging
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.config import ServerConfig
import asyncio

config = ServerConfig()
app = FastAPI()


async def main():
    logging.getLogger("uvicorn.access").disabled = config.access_log
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
    )

    uvicorn_config = uvicorn.Config(
        app,
        host=config.host,
        port=config.port,
        log_level=config.log_level.lower(),
        access_log=config.access_log,
        reload_delay=config.reload_delay,
        limit_concurrency=config.limit_concurrency,
        backlog=config.backlog,
        limit_max_requests=config.limit_max_requests,
        timeout_keep_alive=config.timeout_keep_alive,
    )
    server = uvicorn.Server(uvicorn_config)
    await server.serve()


if __name__ == '__main__':
    asyncio.run(main())

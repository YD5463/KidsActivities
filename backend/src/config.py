from typing import Optional
from pydantic_settings import BaseSettings


class ServerConfig(BaseSettings):
    host: str = "0.0.0.0"
    port: int = 8080
    log_level: str = "INFO"
    debug: bool = True
    access_log: bool = True
    reload_delay: float = 0.25
    limit_concurrency: Optional[int] = None
    backlog: int = 2048
    limit_max_requests: Optional[int] = None
    timeout_keep_alive: int = 5
    apm_enabled: bool = False


# class ClientConfig(BaseSettings):
#     user_agent: str = "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"
#     timeout_seconds: int = 5
#     max_connections: int = 5000
#     force_close: bool = False
#

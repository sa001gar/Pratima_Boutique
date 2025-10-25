# pratima_boutique/storages.py
from storages.backends.azure_storage import AzureStorage

class AzureStaticStorage(AzureStorage):
    account_name = None  # will be taken from settings at runtime
    account_key = None
    azure_container = "static"
    expiration_secs = None

class AzureMediaStorage(AzureStorage):
    account_name = None
    account_key = None
    azure_container = "media"
    expiration_secs = None

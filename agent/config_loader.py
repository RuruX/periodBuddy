#配置文件加载器
# utils/config_loader.py
import json


class ConfigLoader:
    def __init__(self, config_path: str):
        self.config_path = config_path
        self.rules = []
        self.settings = {}
        self._load()

    def _load(self):
        with open(self.config_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        self.rules = data.get("rules", [])
        self.settings = data.get("settings", {})

        print("【DEBUG】规则数量：", len(self.rules))
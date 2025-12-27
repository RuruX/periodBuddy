#问答系统主类--整合所有功能的主系统
# question_system.py
from config_loader import ConfigLoader
from keyword_matcher import KeywordMatcher
from knowledge_retriever import KnowledgeRetriever
import os


class QuestionSystem:
    def __init__(self, config_path: str):
        loader = ConfigLoader(config_path)
        self.rules = loader.rules
        self.settings = loader.settings

        self.matcher = KeywordMatcher(self.rules)

        self.default_response = self.settings.get(
            "default_response",
            "抱歉，我暂时无法回答这个问题。"
        )
        self.threshold = self.settings.get("confidence_threshold", 0.0)

        base_dir = os.path.dirname(os.path.abspath(__file__))
        kb_path = os.path.join(base_dir, "knowledge_base.txt")
        self.knowledge = KnowledgeRetriever(kb_path)

    def answer(self, question: str) -> str:
        # 1. 规则优先
        rule_result = self.matcher.match(question)
        if rule_result and rule_result["score"] >= self.threshold:
            return rule_result["rule"]["response"]

        # 2. 知识库检索
        passages = self.knowledge.retrieve(question)
        if passages:
            return self._format_knowledge_answer(passages)

        # 3. 兜底
        return self.default_response

    def _format_knowledge_answer(self, passages):
        answer = "【来自权威资料】\n"
        for p in passages:
            answer += p.strip() + "\n\n"

        answer += (
            "⚠️ 本回答仅用于健康科普信息，"
            "不能替代专业医生的诊断或治疗。"
        )
        return answer
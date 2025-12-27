import os


class KnowledgeRetriever:
    def __init__(self, kb_path: str):
        if not os.path.exists(kb_path):
            raise FileNotFoundError(f"Knowledge base not found: {kb_path}")

        self.sections = self._load_knowledge(kb_path)

    def _load_knowledge(self, path: str):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()

        # 用 --- 分段
        raw_sections = content.split("---")
        sections = []

        for sec in raw_sections:
            text = sec.strip()
            if len(text) > 50:  # 过滤太短的
                sections.append(text)

        return sections

    def retrieve(self, question: str, top_k: int = 2):
        scores = []

        for section in self.sections:
            score = self._keyword_score(question, section)
            if score > 0:
                scores.append((score, section))

        scores.sort(reverse=True, key=lambda x: x[0])
        return [s[1] for s in scores[:top_k]]

    def _keyword_score(self, question: str, text: str):
        score = 0
        for word in question.lower().split():
            if word in text.lower():
                score += 1
        return score
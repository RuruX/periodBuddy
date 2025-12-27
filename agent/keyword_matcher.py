class KeywordMatcher:
    def __init__(self, rules: list):
        self.rules = rules

    def match(self, question: str):
        best_match = None
        best_score = 0.0

        for rule in self.rules:
            keywords = rule.get("keywords", [])
            if not keywords:
                continue

            hit_count = 0
            for kw in keywords:
                if kw in question:
                    hit_count += 1

            score = hit_count / len(keywords)

            if score > best_score:
                best_score = score
                best_match = rule

        if best_match is None or best_score == 0:
            return None

        return {
            "rule": best_match,
            "score": best_score
        }
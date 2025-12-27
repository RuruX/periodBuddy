from knowledge_retriever import KnowledgeRetriever

kr = KnowledgeRetriever("knowledge_base.txt")

while True:
    q = input("Question: ")
    if q == "q":
        break

    results = kr.retrieve(q)
    print("\n--- Retrieved ---")
    for r in results:
        print(r)
        print("---------------")
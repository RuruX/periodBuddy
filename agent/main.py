#项目入口
# main.py
from question_system import QuestionSystem

def main():
    qs = QuestionSystem("rules.json")
    print("问题系统已启动，输入 quit 退出")

    while True:
        question = input("你：").strip()
        if question.lower() == "quit":
            print("系统：再见")
            break

        answer = qs.answer(question)
        print("系统：", answer)


if __name__ == "__main__":
    main()


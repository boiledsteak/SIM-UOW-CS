# simple program that prints questions randomly from .txt file

import random

def read_and_shuffle_questions(filename):
    with open(filename, 'r') as file:
        # Read all lines and filter out empty lines
        questions = [line.strip() for line in file if line.strip()]
    
    # Shuffle the list of questions
    random.shuffle(questions)
    
    return questions

def print_questions(questions):
    for question in questions:
        input("\n\n" + question + "\n(Press Enter for the next question)\n\n")
        print()  # Print a blank line for better readability between questions

if __name__ == "__main__":
    filename = "qns.txt"  # Change the filename to your file's name
    questions = read_and_shuffle_questions(filename)
    print_questions(questions)

import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type`.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    const blankQuestion: Question = {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
    };
    return blankQuestion;
}

/**
 * Returns true if the answer matches the expected answer (case-insensitive, trimmed).
 */
export function isCorrect(question: Question, answer: string): boolean {
    const userAnswer = answer.trim().toLowerCase();
    const expectedAnswer = question.expected.trim().toLowerCase();
    return userAnswer === expectedAnswer;
}

/**
 * Returns true if the answer is valid for the question type.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    } else {
        for (let i = 0; i < question.options.length; i++) {
            if (question.options[i] === answer) {
                return true;
            }
        }
        return false;
    }
}

/**
 * Returns a string like "9: My First Q" (first 10 chars of name).
 */
export function toShortForm(question: Question): string {
    const shortName = question.name.substring(0, 10);
    return question.id + ": " + shortName;
}

/**
 * Returns a markdown representation of the question.
 */
export function toMarkdown(question: Question): string {
    let result = "# " + question.name + "\n" + question.body;
    if (question.type === "multiple_choice_question") {
        for (let i = 0; i < question.options.length; i++) {
            result += "\n- " + question.options[i];
        }
    }
    return result;
}

/**
 * Returns a new question with the name changed.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

/**
 * Returns a new question with the published field inverted.
 */
export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

/**
 * Returns a new question that is a copy of the old question, with a new id and name.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    const newQuestion: Question = {
        ...oldQuestion,
        id: id,
        name: "Copy of " + oldQuestion.name,
        published: false,
    };
    return newQuestion;
}

/**
 * Returns a new question with a new option added (deep copy of options).
 */
export function addOption(question: Question, newOption: string): Question {
    const newOptions = [...question.options, newOption];
    return {
        ...question,
        options: newOptions,
    };
}

/**
 * Merges two questions as described.
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        ...contentQuestion,
        id: id,
        name: name,
        points: points,
        published: false,
    };
}

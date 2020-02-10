const assert = require("assert");

/**
 * Load page recursive.
 */
const load = async () => {
  try {
    await page.goto("http://localhost:3000");
  } catch (e) {
    await load();
  }
};

describe("Quiz", () => {
  beforeEach(load);

  it("should have at least one question with options", async () => {
    const questions = await page.$$('[data-test="pergunta"]');

    assert(questions.length > 0, "Quiz should have questions.");

    const options = await Promise.all(
      questions.map(question => question.$$('[data-test="opcao"]'))
    );

    options.forEach((option, index) =>
      assert(
        option.length > 1,
        `Question number "${index + 1}" should have more than one option.`
      )
    );
  });

  it("should be able to answer a question", async () => {
    const question = await page.$('[data-test="pergunta"]');

    assert(question !== null, "Quiz should have questions.");

    const option = await question.$('[data-test="opcao"]');

    assert(option !== null, "Question should have options.");

    await option.click();

    const answer = await page.$eval(
      '[data-test="pergunta"]',
      question => question.dataset.resposta
    );

    assert(
      ["correta", "errada"].includes(answer),
      'Question should have a data attribute "resposta" with the answer.'
    );
  });

  it("should show correct answers count and reset button", async () => {
    const questions = await page.$$('[data-test="pergunta"]');

    assert(questions.length > 0, "Quiz sohuld have questions.");

    const choices = await Promise.all(
      questions.map(async (question, index) => {
        const options = await question.$$('[data-test="opcao"]');

        assert(
          options.length > 1,
          `Question number "${index + 1}" should have more than one option.`
        );

        const random = Math.floor(Math.random() * options.length);

        return options[random];
      })
    );

    for (const choice of choices) {
      await choice.click();
    }

    const correct = (await page.$$('[data-resposta="correta"]')).length;

    assert(
      (await page.$(`[data-resultado="${correct}"]`)) !== null,
      "Can not assert correct answers count."
    );

    const button = await page.$('[data-test="refazer"]');

    assert(button !== null, "Could not find the reset button.");

    await button.click();

    assert(
      (await page.$(`[data-resultado="${correct}"]`)) === null,
      "Correct answers score should be reseted after clicking reset button."
    );

    const answers = await page.$$eval('[data-test="pergunta"]', questions =>
      questions.map(question => question.dataset.resposta)
    );

    assert(
      answers.filter(answer => ["correta", "errada"].includes(answer))
        .length === 0,
      'Question data attribute "resposta" should be reseted after clicking reset button.'
    );
  });
});

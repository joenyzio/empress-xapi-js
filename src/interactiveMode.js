import inquirer from 'inquirer';

export const interactiveMode = async () => {
  const questions = [
    {
      type: 'input',
      name: 'actorName',
      message: 'What is the actor name?',
    },
    // ... Add other questions here based on your requirements ...
  ];

  const answers = await inquirer.prompt(questions);

  const statement = {
    actor: {
      name: answers.actorName,
      mbox: answers.actorMbox,
    },
    // ... Populate other statement properties using the answers ...
  };

  return statement;
};

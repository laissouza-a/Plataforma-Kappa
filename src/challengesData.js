// por enquanto deixar mockado em js depois implementar a api.

export const challengesData = [
  {
    id: "02_Control_Flow",
    title: "02_Control_Flow",
    difficulty: "MEDIUM",
    description: "Master execution paths. Implement conditional logic and iterative loops to create dynamic scripts.",
    context: "In this mission, you will build a sophisticated access control sequence. The system requires validation before granting elevated privileges.",
    objectives: [
      "Initialize a variable access_level to integer 0.",
      "Create a conditional check for the user_token.",
      "If user_token equals 'ROOT', set access_level to 99.",
      "Otherwise, increment access_level by 1 for standard entry."
    ],
    xpReward: 100,
    fileName: "script.py",
    language: "Python",
    initialCode: `def validate_access(user_token):
    # TODO: Implement control flow logic here
    access_level = 0
    
    if user_token == "ROOT":
        access_level = 99
    else:
        access_level += 1
        
    return access_level`
  },
  {
    id: "01_Variables",
    title: "01_Crypto_Init",
    difficulty: "EASY",
    description: "Initialize your workspace environment parameters.",
    context: "Before connecting to the server, define your identification signature string.",
    objectives: [
      "Create a variable named 'agent_name'.",
      "Assign the value 'Neo' to it."
    ],
    xpReward: 50,
    fileName: "init.py",
    language: "Python",
    initialCode: `# TODO: Initialize your agent variable\nagent_name = "Neo"`
  }
];
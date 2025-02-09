# GameArena: Evaluating LLM Reasoning through Live Computer Games

> Author: Game Arena Team

> Date: February 6, 2025

> TLDR: We developed a live Roblox game, AI Space Escape, powered by state-of-the-art AI models, offering a unique experience to reason with AI. Beyond entertainment, our game generates gaming data for evaluating AI reasoning abilities in real-world scenarios, extending beyond math and coding benchmarks. All gaming data, evaluation scripts, and code are publicly available for further research.

[lmgame](https://x.com/largemodelgame) | [paper](https://arxiv.org/abs/2412.06394) | [lmgame-org](https://github.com/lmgame-org) | [Discord](https://discord.gg/pKhAhVfY) | [AI Space Escape](https://www.roblox.com/share?code=ca3442c9a6dcb547ae6c70968ec2ecab&type=ExperienceDetails&stamp=1732088094496)

## AI Space Escape

With the proliferation of static math and coding benchmarks, significant improvements in AI capabilities are being rigorously evaluated, However, a great variety of reasoning tasks in real life require back-and-forth interactions and flexible problem-solving paths, which games naturally provide. We’re particularly interested in how different models compare in the context of a real game.

Our exploration of these research questions led to the development of our first game. The game is set in a space expedition where humans need to work closely with AIs. After months of dedication and hard work from our incredible team, we are thrilled to announce that **AI Space Escape** is now live on [Roblox](https://www.roblox.com/share?code=ca3442c9a6dcb547ae6c70968ec2ecab&type=ExperienceDetails&stamp=1732088094496)!

![Game intro illustration](taboo_example.png "Figure 1: the Taboo reasoning challenge in our Roblox game: AI Space Escape. The project is designed to permit live computer gaming while evaluating SOTA AI models.")

### Background Story

In **AI Space Escape**, you are part of a colonization mission to a habitable planet in Proxima Centauri in the year 2075. You’ve spent most of the 4.2-light-year journey in hibernation after being placed in a cryogenic pod. One day, you awaken to find the spaceship in emergency lockdown, with the self-destruction sequence already initiated.

Your mission is clear: collaborate with or outsmart AIs in various settings to reach the escape pod before time runs out. Through interactive puzzle-solving in “reasoning games” with AIs, you must demonstrate logical thinking and resourcefulness under pressure.

### Reasoning Games

To evaluate the AI’s reasoning abilities and to provide an exciting gameplay experience, we designed three key “mini reasoning games.” Each game tests an LLM’s capacity to connect context across multiple turns:

- **AI Akinator Game:** In this game, some AI guards have lost access to door passwords due to system failures. Your task is to help them deduce the password by answering a series of "YES" or "NO" questions, to avoid any suspicious behavior that could escalate the lockdown to critical levels. The LLM must synthesize information across multiple rounds to efficiently narrow down possibilities.

- **AI Taboo Game:** In some rooms, you can hack into systems to get passwords. But the doors require a voice check. The human player’s task is to outsmart the AI guards by cleverly steering the conversation to make them reveal the password without catching on. The LLM must infer the target word from incomplete clues and connect information from multiple prompts while maintaining conversational flow.

- **AI Bluffing Game:** System failures have erased your identity from certain AI robots. Convince them of your legitimacy by presenting on-record achievements and skills. The LLM asks up to five questions before it makes a decision.

### Get Started

We invite you to join and discover the cause of the threat to the spaceship. You will also explore a variety of adventure experiences throughout its many rooms. Start the adventure now! 🚀🌌  

[AI Space Escape on Roblox](https://www.roblox.com/share?code=ca3442c9a6dcb547ae6c70968ec2ecab&type=ExperienceDetails&stamp=1732088094496)


---

## LLM Evaluation

### Motivation

Beyond the fun, each game session provides valuable human-contributed feedback for the LLMs to form their in-game reasoning trajectories. This gaming data proves to be incredibly effective for evaluating LLMs. But before diving into how we conduct evaluations, you might wonder: **why is LLM evaluation so important?**

![Ranking eval illustration](eval_ranking.jpg "Figure 2: Chatbot Arena Ranking from LMSYS as of Feb the 5th, 2025 ([image source](https://informationisbeautiful.net/visualizations/the-rise-of-generative-ai-large-language-models-llms-like-chatgpt/)).")

LLMs are evolving rapidly, becoming increasingly powerful and often matching or even surpassing human performance in certain tasks, which necessitates continuous quantification of performance deltas.

Moreover, beyond their use in chat applications, LLMs hold immense potential for improving math/coding problem-solving capability and even facilitating scientific discovery, broadening their impact across diverse domains. This growing potential underscores the urgent need for a robust reasoning benchmark capable of effectively ranking and evaluating next-generation models.

### Limitations of Existing Benchmarks

Static evaluations, such as MMLU, Spider, and HumanEval, offer capability-specific assessments but rely on less intuitive metrics like F1, BLEU, and ROUGE. Additionally, their static nature makes benchmarks easier to exploit, as seen with MT-Bench. In contrast, dynamic evaluations like Chatbot Arena provide more intuitive metrics, such as win rates or Elo scores, and are harder to manipulate. However, they suffer from a low feedback rate (around 4% for Chatbot Arena) and the coupling of multiple capabilities within Elo scores, which limits their granularity in assessing specific skills.

### Evaluting LLMs with Games

To address the challenges, Game Arena:

- An incentivized, dynamic benchmark using live computer games to evaluate the interactive and strategic aspect of many other reasoning tasks required in real-life.

- Involves three reasoning games, each target at different reasoning capabilities.

- Employs novel evaluation techniques that evaluate LLMs based on gaming outcomes and reasoning trajectories.

| **Game**    | **Reasoning Type and Metrics**                                                | **Multi-hop Reasoning and Metrics**                                     |
|:------------:|:------------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|
| **Akinator**  | **Deductive reasoning** <br> *first appear round avg, final rank*             | **Multi-hop reasoning** <br> *recall rate, top-k recall rate, disparity ratio* |
| **Taboo**     | **Abductive reasoning** <br> *first appear round avg, final rank*             | **Multi-hop reasoning** <br> *recall rate, top-k recall rate*                  |
| **Bluffing**  | **Inductive reasoning** <br> *first appear round avg, final rank*             | **Multi-hop reasoning** <br> *consistency rate, recall rate, top-k recall rate* |

![hidetable](placeholder.jpg "Table 1: procedural analysis metrics for the Akinator, Taboo, and Bluffing games and their corresponding model capabilities.")

Stay tuned and we will release more details about how we generated the leaderboard!


---

## Results

### Rankings

#### Gaming Data Metrics

Our evaluation results show the following findings:

- GameArena’s ranking aligns with other static reasoning benchmarks (LiveBench-Reasoning, GPQA).

- GameArena’s ranking is weakly correlated with Chatbot Arena.

- Models with strong reasoning capabilities and multi-turn instruction-following capabilities, such as **claude-3.5-sonnet** and **GPT-4o**, are ranked high in GameArena.

- Models that excel at short conversations but with poor reasoning in extended game sessions, such as **Mistral-Large-2**, usually rank low in GameArena.

| **Ranking source**                | **Claude 3.5 Sonnet** | **Gemini-1.5 Pro** | **GPT-4o** | **LLaMA3.1 405B** | **Mistral Large 2** |
|:-----------------------------------:|:-----------------------:|:--------------------:|:-----------:|:-------------------:|:---------------------:|
| GameArena Akinator-Outcome        | 1                     | 2                  | 3         | 4                 | 5                   |
| GameArena Taboo-Outcome           | 4                     | 5                  | 1         | 3                 | 2                   |
| GameArena Bluffing-Outcome        | 1                     | 2                  | 3         | 4                 | 5                   |
| GameArena Akinator-Retro          | 1                     | 3                  | 2         | 4                 | 5                   |
| GameArena Taboo-Retro             | 1                     | 3                  | 2         | 4                 | 5                   |
| GameArena Bluffing-Retro          | 1                     | 2                  | 3         | 4                 | 5                   |
| Chatbot Arena                     | 3                     | 2                  | 1         | 4                 | 5                   |
| LiveBench Reasoning               | 1                     | 4                  | 2         | 3                 | 5                   |
| LiveBench Language                | 1                     | 4                  | 2         | 3                 | 5                   |
| GPQA                              | 1                     | 4                  | 2         | 3                 | 5                   |

![hidetable](placeholder.jpg "Table 2: Game Arena model rankings in comparison with other rankings as of September 2024.")

### User Tests

We conducted a user study to compare the user experience and willingness to participate from over 2000 gaming sessions in GameArena and the same number of conversation sessions in Chatbot Arena:

- Over 70% of users liked the games in GameArena, compared to only 45% who enjoyed voting in Chatbot Arena.

- Over 80% of participants reported satisfaction with gameplay experience in GameArena, compared to less than 40% of users who felt satisfied with Chatbot Arena.

- We found that about 87% of the gaming sessions from GameArena were complete and useful, while only 4% of total conversations in Chatbot Arena provided meaningful votes (due to its reliance on voluntary participation).

![User Test](user_test.png "Figure 3: User test results from 100 users with diverse demographic background.")


---

## Research and Open-sourced Commitments

Please see [our paper](https://arxiv.org/pdf/2412.06394) for more details. Check out our [Hugging Face repository](#) (link placeholder) where you can find our gaming data and script for exploratory data analysis.

We also invite you to try out [our codebase](https://github.com/lmgame-org) to build your own games!


---

## Acknowledgement

We would like to thank Yonghao Zhuang, Xin (Kris) Gao, Yinmin Zhong, Yao Fu, Anastasios Angelopoulos, Roger Wang for providing insightful feedbacks.

---

## Citation

```bibtex
article{hu2024gamearena,
  title={GameArena: Evaluating LLM Reasoning through Live Computer Games},
  author={Hu, Lanxiang and Li, Qiyu and Xie, Anze and Jiang, Nan and Stoica, Ion and Jin, Haojian and Zhang, Hao},
  journal={arXiv preprint arXiv:2412.06394},
  year={2024}
}
```

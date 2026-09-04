## Finora  
**Team:**  
Samuel Martin, Steven De Jesus, Wilfredo Cedano Ventura, William Hite

### Abstract  
As inflation rises, managing finances has become increasingly difficult, especially for college students with limited or inconsistent sources of income. Finora is intended to help lessen this burden by providing a student-focused financial management system. Its primary purpose is to help college students better understand their financial situation, manage their available funds, and develop responsible spending and saving habits.

Through Finora, students will be able to track and categorize their expenses and income, including wages, financial aid, scholarships, and other sources of funds. Students will also be able to view detailed spending breakdowns, create budgets, establish savings goals, and monitor their financial progress. One of Finora’s key features will be financial warnings that help students understand how much money remains available after accounting for recurring and nonrecurring expenses. By providing a clearer view of where their money is going and how much they can safely spend, Finora aims to help students balance their everyday needs and wants while maintaining better control of their finances.

### Description  
As the cost of everyday necessities continues to rise, managing finances has become increasingly challenging. College students are being particularly affected by these challenges as they often have limited income while still shouldering a variety of expenses. Many students work part-time while attending school, which can limit their income. At the same time, expenses such as housing, food, transportation, tuition, textbooks, school supplies, subscriptions, and entertainment can quickly consume their available capital. Students may also have limited independent experience managing their finances, making it difficult to determine how much they can safely spend while still preparing for future expenses.

The financial situation of a college student also differs from that of someone working a traditional full-time job. While some students receive regular income from employment, others rely on a combination of part-time work, financial aid, scholarships, family assistance, and other, possibly irregular, sources of income. Without proper planning, funds intended to support the student throughout the semester may be spent too quickly, potentially leading to financial difficulties.

Finora is designed to address these issues by providing college students with a centralized, student-focused way to manage their finances. Rather than simply showing how much money is still available, Finora intends to help users understand where their money comes from, where it is being spent, and how much can realistically be used without interfering with necessities or financial goals. The goal is to make personal financial management easier to understand for students who may have limited income, irregular income, or little to no experience managing budgets.

A major part of Finora will be the ability to record and organize income and expenses. Students will be able to record income from various sources, including, but not limited to, part-time employment, financial aid, scholarships, refunds, and family assistance. Expenses can be similarly recorded and separated into various categories, such as housing, food, transportation, educational expenses, entertainment, and subscriptions, among other personal expenses. Such an organized financial structure will allow students to see more than just a list of individual transactions. Instead, they will be able to identify which areas account for the largest share of their spending and better understand how their financial decisions affect the money they have available.

Finora will also place an emphasis on planning rather than only reviewing money that has already been spent. Students will be able to set monthly budgets and limits for different categories. For example, a student may determine how much they can spend on food, entertainment, transportation, or other expenses during a given period. Recurring obligations, such as rent, car payments, insurance, and phone bills, will also be accounted for when evaluating the student's financial position.

One of Finora's most important goals is to help students distinguish between the total amount of money they currently have and the amount they can afford to spend. A bank account by itself does not necessarily provide an accurate representation of a person’s financial freedoms. Finora will account for the student's financial responsibilities when presenting the user’s available funds. This will provide a clearer picture of how much money remains after accounting for necessary and expected expenses, helping prevent money reserved for obligations from being spent unnecessarily.

### Features List 
   **Must Have By The End of the Semester**

| **User Account and Login** | Create a personal account, log in, log out, and keep financial information associated with their account. |
| :---- | :---- |
| **Financial Dashboard** | See an overview of their current financial situation, including income, expenses, remaining money, and budget status. |
| **Income Tracking** | Record income from jobs, financial aid, scholarships, allowances, side work, or other sources. |
| **Expense Tracking** | Record purchases and expenses with an amount, date, and category. |
| **Income & Expense Categories** | Organize transactions into categories such as food, housing, transportation, tuition/school, entertainment, work income, financial aid, etc. |
| **Monthly Budget** | Establish an overall monthly spending budget based on expected income and expenses. |
| **Category Budgets** | Set spending limits for categories |
| **Recurring Expenses** | Record regular obligations such as rent, car payments, subscriptions, insurance, or phone bills so they are accounted for each month. |
| **Saving goals** | Create goals such as an emergency fund, new laptop, tuition payment, or moving expenses and track progress toward them |
| **Basic Financial Reports** | View spending and income over a selected period and see where the largest portions of their money are going. |
| **Visual Spending Breakdown** | Display understandable charts or summaries showing spending by category and income versus expenses. |
| **Transaction History & Management** | View previous transactions and correct or remove entries when necessary.. |
| **Financial Warnings** | Warn the user when they are approaching or exceeding a budget or when their spending is greater than their income. |
| **Search and filtering**  | Users will be able to search and filter transactions by criteria such as date, category, and transaction type.  |

   **Will Have if There is Time**

| **Debt Tracking** | Enter student loans, credit cards, car loans, and other debts and monitor the remaining balances.  |
| :---- | :---- |
| **Upcoming Bills**  | See which bills and payments are approaching and how much money will be needed.  |
| **Financial Calendar**  | View expected income, bills, and important financial dates on a calendar.  |
| **Needs vs Wants**  | Mark expenses as necessary or discretionary to better understand where spending can be reduced.  |
| **Emergency Fund Tracker**  | Establish an emergency savings target and see how much of it has been funded.  |
| **Semester Budgeting**  | Plan finances around an academic semester rather than only month-to-month. This could account for tuition, textbooks, financial aid, and semester-specific expenses  |
| **Spending Trends**  | Compare spending between months and identify categories where spending is increasing.  |
| **Custom Categories**  | Allow users to create categories that better represent their individual financial situation.  |
| **Financial Health Summary**  | Give the user a simple summary based on factors such as spending relative to income, savings progress, and budget adherence.  |
| **Simple Financial Tips** | Provide relevant educational suggestions when certain patterns occur, such as consistently exceeding a food or entertainment budget.  |

   **Unable to implement during the semester**
	
| **Automatic Back Account Connection** | Automatically retrieves account balance and transactions rather than requiring manual entries. |
| :---- | :---- |
| **Automatic Transaction Categorization** | Determine transaction categories based on transaction information.  |
| **Advanced Debt Repayment Planning** | Compare repayment strategies and help users determine how additional payments could affect their debt.  |
| **Shared Budgets** | Allows roommates, couples, or family members to manage selected expenses together. |
| **Receipt Scanning** | Allow users to capture receipts and automatically create expense entries from them. |
| **Predictive Financial Planning** | Estimate future balances and warn users about potential shortages before they occur. |

### Initial Set of Technologies

* Platform: Web application for desktop and phone.  
* Operating system: Windows.  
* IDE: Visual Studio Code.  
* Languages: TypeScript, CSS, HTML, and SQL.  
* 3rd party frameworks: Bootstrap
* Database and authentication: Supabase  
* Server software: React, [Next.js](http://Next.js) and Vercel.  
* Communication software: Discord and text message.  
* AI platform: ChatGPT.  
* how the team plans to use AI:  
  * All team members will use the same ChatGPT’s Free plan.

### Server Info

Finora’s backend will be hosted by Supabase using the free plan. Supabase’s PostgreSQL database will be used to store any necessary user information. Supabase will also be used to handle user authentication.

### Data Sources

Since Finora will track users' financial status and help them budget, it will require access to their financial data. Finora will not have direct access to users' bank information, as that is outside the scope of this semester's project. Instead, Finora will use data entered manually by the user. There will be no initial data set, only what users give the website after it is live.

### AI Statement
We plan to use AI primarily as an advisory resource and to bounce ideas off of. We plan on using ChatGPT’s free plan.

### Team Backgrounds

**Wilfredo Cedano Ventura:** I have experience using Visual Studio Code, TypeScript, and SQL. Have a basic understanding of HTML and CSS. No experience with React, Next.js, and Vercel.

**Samuel Martin:** Some experience in designing databases and writing SQL. Never formally learned CSS or HTML, but has used them alongside Bootstrap to create a functioning webpage. No experience with Supabase, Vercel, or any equivalent tool.

**William Hite:** I haven’t really used Visual Studio Code or SQL, but I have a basic familiarity with HTML and CSS. I have not used React, Next.js, or Vercel.

### Dependencies, Limitations, Risks

**Limitations:**

While chunks of the project can be developed simultaneously, such as the webpage's visual appearance and the database's structure, we will be unable to test Finora's functionality until a large portion of the database, server, and webpage is complete. There is nothing that can really be done to address this risk. What we can do is plan extensively so that each piece of Finora can continue development for as long as possible while we wait on whichever piece ends up taking the longest. For example, we can determine exactly what user data needs to be stored before writing a single line of code, allowing some members of the group to design and implement the entire database, even if it takes significantly longer to figure out Supabase or the webpage's HTML.

   * Supabase: The \$0\/month plan for Supabase access provides unlimited API requests, a five-hundred-megabyte database, supports fifty thousand monthly active users, allows five gigabytes of data egress, and one gigabyte of file storage. This should be more than sufficient for Finora initially; expansion should be required only if development continues past the fall semester. In the event that we do run into issues due to Supabase, we can upgrade to the \$25\/month plan, which offers several times the speed and storage.

   * Vercel: Vercel’s hobby plan allows one million edge requests and one hundred gigabytes of fast data transfer a month. This should be enough to get Finora to function. If it is not, we could upgrade to the pro plan for twenty dollars.

   * Team Experience: Each member of the team is missing knowledge and skills that are essential to the creation of Finora. For example, it seems that no one has experience with Supabase. Since Supabase will be an important component of the project, this is a significant problem. In this particular case, one or more group members will need to learn to use Supabase through YouTube videos and AI. In other cases, we will assign group members to the parts of the project they already have some experience with to maximize the time spent working on Finora rather than learning a skill someone else in the group already has.

**Risks:**

   * Calculation Errors: Finora will perform calculations involving income, expenses, budget limits, and savings goals. Incorrect calculations could make the information presented to users misleading. To avoid this situation, the team will create tests for important financial calculations.

   * Privacy and Security: The project will contain financial information, making privacy an important concern. Although this is a student project and not a banking application, one user should never be able to access another user’s information.

   * Team Coordination: Because multiple people will modify the same project, there is a risk of conflicting code changes, duplicated work, or features being developed based on different assumptions. To avoid this situation, the team members will communicate their progress regularly and commit to working frequently.

   * Integration Risk: Different features may work independently but fail when combined. The team will integrate features throughout development rather than developing every portion independently and combining them only near the end of the semester.

   * Schedule Risk: A semester provides a limited development period. Unexpected technical problems or underestimated features could cause the project to fall behind schedule. To avoid this situation, the team will prioritize the required feature list and monitor progress throughout the semester.

   * Deployment Risk: The deployment of a new website may experience unexpected downtime, security vulnerabilities, configuration errors, and broken user features. To avoid this situation, the team will deploy an early version for testing before the project is complete.
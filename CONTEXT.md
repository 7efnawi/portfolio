# Portfolio Domain Model

Canonical domain language for Yousef Mahmoud's developer and engineering portfolio.

## Language

**Data Engineer**:
The primary professional identity and role, focusing on designing ETL/ELT pipelines, data modeling, database optimization, and cloud architecture.
_Avoid_: Data Analyst, BI Specialist, General Developer

**DEPI**:
Digital Egypt Pioneers Initiative, the official Egyptian Ministry of Communications and Information Technology (MCIT) internship program where the candidate serves as a Data Engineering Intern.
_Avoid_: Egyptian Pioneers, DEPI Bootcamp

**Experience**:
A structured record of official professional employment or internships (e.g., DEPI), distinct from academic studies or individual portfolio projects.
_Avoid_: Jobs, Work History, Freelance list

**Portfolio Data**:
The canonical, typed JSON object (`portfolio-data.json`) that acts as the single source of truth for all content displayed across the portfolio.
_Avoid_: App State, Mock Data, Content DB

**Section Registry**:
The central deep module (`sections.ts`) providing canonical navigation links, order, and identifiers for all portfolio sections.
_Avoid_: Nav List, Menu Config, Route Map


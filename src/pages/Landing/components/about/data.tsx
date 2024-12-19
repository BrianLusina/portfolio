import { AboutSectionTab } from "./About.props"

// TODO: to be fetched from CMS
export const aboutTabSectionData: AboutSectionTab[] = [
    {
      tabTitle: 'Main Skills',
      content: [
        {
          title: (
            <a href="/service">
              Methodologies
            </a>
          ),
          description: 'Agile, Scrum, Kanban',
        },
        {
          title: (
            <a href="/service">
              Languages<span> - Development</span>
            </a>
          ),
          description: 'Python, Kotlin, TypeScript, JavaScript, Golang',
        },
        {
          title: (
            <a href="/service">
              DevOps <span> - CI/CD</span>
            </a>
          ),
          description: 'Kubernetes, Docker, Terraform',
        },
        {
          title: (
            <a href="/service">
              Cloud <span></span>
            </a>
          ),
          description: 'AWS, Google Cloud Platform',
        },
        {
          title: (
            <a href="/service">
              Databases <span></span>
            </a>
          ),
          description: 'PostgreSQL, MongoDB',
        },
        {
          title: (
            <a href="/service">
              Frameworks <span></span>
            </a>
          ),
          description: 'ReactJS, SpringBoot, FastAPI, Flask, Ktor',
        },
        {
          title: (
            <a href="/service">
              Mobile <span></span>
            </a>
          ),
          description: 'Android, React Native',
        },
      ],
    },
    {
      tabTitle: 'Experience',
      content: [
        {
          title: (
            <a href="https://www.yoco.com/za/" target="_blank">
              Senior Software Engineer<span> - Yoco</span>
            </a>
          ),
          description: '2021 - Current',
        },
        {
          title: (
            <a href="https://www.imbankgroup.com/ke/" target="_blank">
              Engineering Lead<span> - I&M Bank Kenya</span>
            </a>
          ),
          description: '2020 - 2021',
        },
        {
          title: (
            <a href="https://www.imbankgroup.com/ke/" target="_blank">
              Senior Software Engineer<span> - I&M Bank Kenya</span>
            </a>
          ),
          description: '2018- 2020',
        },
        {
          title: (
            <a href="https://www.trademarkafrica.com/" target="_blank">
              Senior Software Engineer<span> - TradeMark East Africa </span>
            </a>
          ),
          description: '2020 - 2023',
        },
        {
          title: (
            <a href="http://optimetriks.com/" target="_blank">
              Software Engineer<span> - Optimetriks </span>
            </a>
          ),
          description: '2018 - 2018',
        },
        {
          title: (
            <a href="https://brck.com/" target="_blank">
              Software Engineer<span> - BRCK </span>
            </a>
          ),
          description: '2016 - 2018',
        },
      ],
    },
    {
      tabTitle: 'Experience & Certification',
      content: [
        {
          title: (
            <a href="https://confirm.udacity.com/PNHJRF5X" target="_blank">
              Cloud DevOps Engineer <span> - Udacity</span>
            </a>
          ),
          description: '2021',
        },
        {
          title: (
            <a href="https://actuaries.org.uk/" target="_blank">
              Certiﬁed Actuarial Analyst
              <span> - Institute and Faculty of Actuaries</span>
            </a>
          ),
          description: '2016',
        },
        {
          title: (
            <a href="/service">
              Information Technology Certiﬁcation <span> - Egerton University, Nairobi, Kenya</span>
            </a>
          ),
          description: '2012',
        },
      ],
    },
  ];
  
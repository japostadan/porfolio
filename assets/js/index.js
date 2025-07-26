const terminalContent = document.getElementById('terminal-content');
const commandInput = document.getElementById('command-input');
        
let commandHistory = [];
let historyIndex = -1;
        
const commands = {
    help: () => {
        return `
            <p>Available commands:</p>
            <ul class="command-list">
                <li><span class="success">about</span> - Learn more about me</li>
                <li><span class="success">skills</span> - View my technical skills</li>
                <li><span class="success">projects</span> - See my portfolio projects</li>
                <li><span class="success">contact</span> - Get my contact information</li>
                <li><span class="success">ls</span> - List directory contents</li>
                <li><span class="success">cat</span> - Display file contents</li>
                <li><span class="success">head</span> - Show first lines of file</li>
                <li><span class="success">file</span> - Determine file type</li>
                <li><span class="success">grep</span> - Search text in files</li>
                <li><span class="success">find</span> - Search for files</li>
                <li><span class="success">wc</span> - Count lines, words, characters</li>
                <li><span class="success">download</span> - Download files</li>
                <li><span class="success">clear</span> - Clear the terminal</li>
                <li><span class="success">neofetch</span> - Display system information</li>
                <li><span class="success">tree</span> - Show directory tree</li>
                <li><span class="success">whoami</span> - Display current user</li>
                <li><span class="success">date</span> - Show current date and time</li>
                <li><span class="success">pwd</span> - Print working directory</li>
            </ul>
            <p>Type any command to get started!</p>
        `;
    },
            
    about: () => {
        return `
            <div class="about-me-section">
            <span class="highlight">About Me</span>
            <hr style="border-top: 1px solid #30363d; margin: 20px 0;">
            
            <h2>👋 Hi, I'm James</h2>
            <p>A passionate Full Stack Developer with over 3 years of experience building modern, high-performance web apps.</p>
            
            <div class="section-header">🚀 <strong>What I Do:</strong></div>
             <ul>
                 <li>Specialize in crafting scalable, efficient web applications with cutting-edge technologies.</li>
                 <li>Focus on solving complex problems and optimizing solutions for performance and scalability.</li>
             </ul>

            <div class="section-header">💡 <strong>Outside of coding:</strong></div>
             <ul>
                 <li>Exploring new technologies, contributing to open-source, and engaging with the developer community.</li>
                 <li>Always up for learning something new and sharing knowledge with others.</li>
             </ul>

             <div class="section-header">🎯 <strong>Currently focused on:</strong></div>
             <ul>
                 <li>React, Node.js, Python, and Cloud Technologies (AWS, GCP).</li>
                 <li>Building high-performance apps with microservices and serverless architectures.</li>
             </ul>
                <div class="status"><span class="success">Status:</span> Actively looking for new opportunities and exciting projects!</div>
            </div>
    `;
    },
    
    skills: () => {
                setTimeout(() => {
                    const progressBars = document.querySelectorAll('.progress-fill');
                    progressBars.forEach(bar => {
                        bar.style.width = bar.dataset.width;
                    });
                }, 100);

        return `<span class="highlight">Technical Skills</span>
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        <div class="skills-bar">
          <span class="skill-name">JavaScript</span>
          <div class="progress-bar"><div class="progress-fill" data-width="90%"></div></div>
          <span class="percentage">90%</span>
        </div>
        <div class="skills-bar">
          <span class="skill-name">Python</span>
          <div class="progress-bar"><div class="progress-fill" data-width="85%"></div></div>
          <span class="percentage">85%</span>
        </div>
        <div class="skills-bar">
          <span class="skill-name">React</span>
          <div class="progress-bar"><div class="progress-fill" data-width="88%"></div></div>
          <span class="percentage">88%</span>
        </div>
        <div class="skills-bar">
          <span class="skill-name">Node.js</span>
          <div class="progress-bar"><div class="progress-fill" data-width="82%"></div></div>
          <span class="percentage">82%</span>
        </div>
        <div class="skills-bar">
          <span class="skill-name">Docker</span>
          <div class="progress-bar"><div class="progress-fill" data-width="75%"></div></div>
          <span class="percentage">75%</span>
        </div>
        <div class="skills-bar">
          <span class="skill-name">AWS</span>
          <div class="progress-bar"><div class="progress-fill" data-width="70%"></div></div>
          <span class="percentage">70%</span>
        </div>

        <span class="success">Additional Skills:</span> Git, MongoDB, PostgreSQL, Redis, Kubernetes`;
    },
            
    
    projects: () => {
        return `<span class="highlight">Portfolio Projects</span>
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div class="project-item">
          <div class="project-title">🌐 E-Commerce Platform</div>
          <div class="project-desc">Full-stack e-commerce solution with payment integration</div>
          <div class="project-tech">Tech: React, Node.js, MongoDB, Stripe API</div>
        </div>
        
        <div class="project-item">
          <div class="project-title">📊 Data Visualization Dashboard</div>
          <div class="project-desc">Interactive dashboard for real-time data analysis</div>
          <div class="project-tech">Tech: Python, Flask, D3.js, PostgreSQL</div>
        </div>
        
        <div class="project-item">
          <div class="project-title">🤖 AI Chatbot Application</div>
          <div class="project-desc">Intelligent chatbot with natural language processing</div>
          <div class="project-tech">Tech: Python, TensorFlow, FastAPI, Docker</div>
        </div>
        
        <div class="project-item">
          <div class="project-title">📱 Mobile Task Manager</div>
          <div class="project-desc">Cross-platform mobile app for productivity</div>
          <div class="project-tech">Tech: React Native, Firebase, Redux</div>
        </div>
        
        Use <span class="help-command" onclick="executeCommand('cat project1.md')">cat project1.md</span> to view detailed project information.`;
    },

    contact: () => {
        return `<span class="highlight">Contact Information</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            <div class="contact-item">
              <span class="contact-label">Email:</span>
              <span class="contact-value">jamespostadan@protonmail.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">GitHub:</span>
              <span class="contact-value">github.com/japostadan</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">LinkedIn: </span>
              <span class="contact-value">linkedin.com/in/japostadan</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">Website: </span>
              <span class="contact-value">japostadan.dev</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">Location: </span>
              <span class="contact-value">Barcelona, Spain</span>
            </div>

            <span class="success">💬 Always open to discussing new opportunities!</span>`;
    },

    ls: () => {
        return `<span class="directory">projects/</span>    <span class="directory">skills/</span>    <span class="file">about.txt</span>    <span class="file">contact.md</span>    <span class="file">resume.pdf</span>    <span class="file">README.md</span>    <span class="file">skills.json</span>    <span class="file">project1.md</span>    <span class="file">project2.md</span>    <span class="file">project3.md</span>    <span class="file">project4.md</span>    <span class="file">project5.md</span>`;
        }, 
            
    pwd: () => '/home/james/portfolio',
            
    whoami: () => 'james - Full Stack Developer & Problem Solver',
            
    date: () => new Date().toString(),
            
    clear: () => {
        terminalContent.innerHTML = `
                    <div class="input-line">
                        <span class="prompt">james@portfolio:~$</span>
                        <input type="text" class="terminal-input" id="command-input" placeholder="Type a command..." autocomplete="off">
                        <span class="cursor">&nbsp;</span>
                    </div>
                `;
                setupCommandInput();
                return '';
    },
    
    neofetch: () => {
    return `
            <div class="neofetch-container">
                <pre class="ascii-art">
            .--.      
           |o_o |     <span class="success"> OS:</span> Ubuntu 22.04 LTS
           |:_/ |     <span class="success"> Host:</span> Portfolio Terminal
          //   \\\\     <span class="success"> Kernel:</span> Developer v3.0
         (|     | )   <span class="success"> Uptime:</span> 3 years, 2 months
        /'\\_   _/\`\\\\<span class="success">   Packages:</span> JavaScript, React, C
        \\\\___)=(___/   <span class="success">Shell:</span> Terminal Portfolio v1.0
                       <span class="success">IDE:</span> VS Code, Vim
                       <span class="success">Coffee:</span> ████████████████ 100%
                </pre>
            </div>
        `;
    },

    tree: () => {
        return `
        <pre class="tree-structure">
        portfolio/
        ├── <span class="directory">projects/</span>
        │   ├── <span class="file">ecommerce-platform/</span>
        │   ├── <span class="file">data-dashboard/</span>
        │   ├── <span class="file">ai-chatbot/</span>
        │   └── <span class="file">mobile-task-manager/</span>
        ├── <span class="directory">skills/</span>
        │   ├── <span class="file">frontend.js</span>
        │   ├── <span class="file">backend.py</span>
        │   └── <span class="file">devops.yml</span>
        ├── <span class="file">about.txt</span>
        ├── <span class="file">contact.md</span>
        └── <span class="file">resume.pdf</span>
        2 directories, 8 files
                </pre>
    `;
},
 
   // Replace your existing cat command with this:
cat: (args) => {
    if (!args || args.length === 0) {
        return `<span class="error">cat: missing operand</span>
            <span class="success">Try:</span> cat [filename]
            
            <span class="success">Available files:</span>
            • project1.md, project2.md, project3.md, project4.md, project5.md
            • about.txt, contact.md, README.md, skills.json
            • resume.pdf (binary file)`;
    }
    
    const filename = args[0];
    
    // Project files with enhanced content
    const files = {
        'project1.md': `<span class="highlight">Project: E-Commerce Platform</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            <span class="success">📋 Description:</span>
            A full-stack e-commerce platform built with modern web technologies.
            Features include user authentication, product catalog, shopping cart,
            payment processing, and comprehensive admin dashboard.

            <span class="success">✨ Key Features:</span>
            • User registration and authentication with JWT
            • Advanced product search and filtering
            • Real-time shopping cart functionality
            • Secure payment processing with Stripe integration
            • Order management and tracking system
            • Admin panel for inventory and user management
            • Email notifications and order confirmations
            • Mobile-responsive design

            <span class="success">🛠️ Technologies Used:</span>
            • <span class="highlight">Frontend:</span> React 18, Redux Toolkit, Tailwind CSS
            • <span class="highlight">Backend:</span> Node.js, Express.js, JWT Auth
            • <span class="highlight">Database:</span> MongoDB with Mongoose ODM
            • <span class="highlight">Payment:</span> Stripe API, PayPal integration
            • <span class="highlight">Deployment:</span> Docker, AWS EC2, Nginx

            <span class="success">🔗 Links:</span>
            • <span class="highlight">GitHub:</span> github.com/japostadan/ecommerce-platform
            • <span class="highlight">Live Demo:</span> ecommerce-demo.japostadan.dev
            • <span class="highlight">API Docs:</span> api.ecommerce-demo.japostadan.dev/docs`,
            
        'project2.md': `<span class="highlight">Project: Data Visualization Dashboard</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            <span class="success">📋 Description:</span>
            Interactive dashboard for real-time data analysis and visualization.
            Built for business intelligence with customizable charts and reports.

            <span class="success">✨ Key Features:</span>
            • Real-time data streaming with WebSockets
            • Interactive charts (line, bar, pie, scatter plots)
            • Customizable dashboard layouts
            • Data filtering and drill-down capabilities
            • Export functionality (PDF, Excel, CSV)
            • User role-based access control

            <span class="success">🛠️ Technologies Used:</span>
            • <span class="highlight">Frontend:</span> React, D3.js, Chart.js, Material-UI
            • <span class="highlight">Backend:</span> Python Flask, SQLAlchemy
            • <span class="highlight">Database:</span> PostgreSQL, Redis (caching)
            • <span class="highlight">Data Processing:</span> Pandas, NumPy

            <span class="success">🔗 Links:</span>
            • <span class="highlight">GitHub:</span> github.com/japostadan/data-dashboard
            • <span class="highlight">Live Demo:</span> dashboard.japostadan.dev`,
            
        'project3.md': `<span class="highlight">Project: AI Chatbot Application</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            <span class="success">📋 Description:</span>
            Intelligent conversational AI chatbot with natural language processing,
            context awareness, and multi-language support.

            <span class="success">🧠 AI Features:</span>
            • Natural language understanding (NLU)
            • Context-aware conversations
            • Intent recognition and entity extraction
            • Sentiment analysis
            • Multi-language support (EN, ES, FR, DE)

            <span class="success">🛠️ Technologies Used:</span>
            • <span class="highlight">AI/ML:</span> TensorFlow, Transformers, spaCy
            • <span class="highlight">Backend:</span> Python FastAPI, Async/Await
            • <span class="highlight">Frontend:</span> React, WebRTC, Web Speech API
            • <span class="highlight">Database:</span> MongoDB, Vector Database

            <span class="success">🔗 Links:</span>
            • <span class="highlight">GitHub:</span> github.com/japostadan/ai-chatbot
            • <span class="highlight">Live Demo:</span> chatbot.japostadan.dev`,
            
        'project4.md': `<span class="highlight">Project: Mobile Task Manager</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            <span class="success">📋 Description:</span>
            Cross-platform mobile application for productivity and task management
            with real-time synchronization and team collaboration.

            <span class="success">📱 Mobile Features:</span>
            • Cross-platform (iOS & Android)  
            • Offline functionality with sync
            • Push notifications
            • Biometric authentication
            • Dark mode support
            • Widget support

            <span class="success">🛠️ Technologies Used:</span>
            • <span class="highlight">Mobile:</span> React Native, Expo
            • <span class="highlight">State:</span> Redux Toolkit, Async Storage
            • <span class="highlight">Backend:</span> Node.js, Express, Socket.IO
            • <span class="highlight">Database:</span> Firebase Firestore

            <span class="success">🔗 Links:</span>
            • <span class="highlight">GitHub:</span> github.com/japostadan/task-manager-mobile
            • <span class="highlight">iOS App:</span> apps.apple.com/app/task-manager-pro
            • <span class="highlight">Android App:</span> play.google.com/store/apps/task-manager-pro`,

        'project5.md': `<span class="highlight">Project: Blockchain Voting System</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            <span class="success">📋 Description:</span>
            Secure, transparent, and decentralized voting system built on blockchain
            technology with cryptographic security and real-time results.

            <span class="success">🔐 Security Features:</span>
            • End-to-end encryption
            • Immutable vote recording  
            • Zero-knowledge proofs for privacy
            • Smart contract validation
            • Anonymous voter verification

            <span class="success">🛠️ Technologies Used:</span>
            • <span class="highlight">Blockchain:</span> Ethereum, Solidity, Web3.js
            • <span class="highlight">Frontend:</span> React, MetaMask integration
            • <span class="highlight">Backend:</span> Node.js, IPFS for storage
            • <span class="highlight">Smart Contracts:</span> OpenZeppelin, Truffle

            <span class="success">🔗 Links:</span>
            • <span class="highlight">GitHub:</span> github.com/japostadan/blockchain-voting
            • <span class="highlight">Live Demo:</span> voting.japostadan.dev`,
            
        'about.txt': commands.about(),
        'contact.md': commands.contact(),
        'README.md': `<span class="highlight">James Postadan - Portfolio</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            ## 🚀 Welcome to my Terminal Portfolio
            
            This interactive terminal showcases my projects, skills, and experience.
            
            ### 📁 Available Files:
            • project1.md - E-Commerce Platform
            • project2.md - Data Visualization Dashboard  
            • project3.md - AI Chatbot Application
            • project4.md - Mobile Task Manager
            • project5.md - Blockchain Voting System
            
            Type 'help' for available commands!`,
            
        'resume.pdf': `<span class="error">cat: resume.pdf: cannot display binary file</span>
            <span class="success">Use 'download resume.pdf' or visit japostadan.dev/resume</span>`,
            
        'skills.json': `<span class="highlight">Technical Skills (JSON Format)</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            <pre>{
  "frontend": { "JavaScript": 90, "React": 88, "TypeScript": 85 },
  "backend": { "Node.js": 82, "Python": 85, "Express.js": 80 },
  "databases": { "MongoDB": 80, "PostgreSQL": 75, "Redis": 70 },
  "devops": { "Docker": 75, "AWS": 70, "Kubernetes": 65 }
}</pre>`
    };
    
    if (files[filename]) {
        return files[filename];
    } else {
        // Suggest similar files
        const suggestions = Object.keys(files).filter(file => 
            file.includes(filename) || filename.includes(file.split('.')[0])
        );
        
        let suggestionText = '';
        if (suggestions.length > 0) {
            suggestionText = `\n<span class="success">Did you mean:</span> ${suggestions.join(', ')}`;
        }
        
        return `<span class="error">cat: ${filename}: No such file or directory</span>${suggestionText}`;
    }
}, 
// Add these to your commands object:

file: (args) => {
    if (!args || args.length === 0) {
        return '<span class="error">file: missing operand</span>';
    }
    
    const filename = args[0];
    const fileTypes = {
        'project1.md': 'Markdown document, ASCII text',
        'project2.md': 'Markdown document, ASCII text', 
        'project3.md': 'Markdown document, ASCII text',
        'project4.md': 'Markdown document, ASCII text',
        'project5.md': 'Markdown document, ASCII text',
        'about.txt': 'ASCII text',
        'contact.md': 'Markdown document, ASCII text',
        'README.md': 'Markdown document, ASCII text',
        'skills.json': 'JSON data, ASCII text',
        'resume.pdf': 'PDF document, version 1.4'
    };
    
    if (fileTypes[filename]) {
        return `<span class="success">${filename}:</span> ${fileTypes[filename]}`;
    } else {
        return `<span class="error">file: ${filename}: No such file or directory</span>`;
    }
},

head: (args) => {
    if (!args || args.length === 0) {
        return '<span class="error">head: missing operand</span>';
    }
    
    const filename = args[0];
    const previews = {
        'project1.md': `<span class="highlight">Project: E-Commerce Platform</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            <span class="success">📋 Description:</span>
            A full-stack e-commerce platform built with modern web technologies...
            
            <span class="success">[Use 'cat ${filename}' to see full content]</span>`,
        'README.md': `<span class="highlight">James Postadan - Portfolio</span>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            ## 🚀 Welcome to my Terminal Portfolio
            
            <span class="success">[Use 'cat ${filename}' to see full content]</span>`
    };
    
    if (previews[filename]) {
        return previews[filename];
    } else {
        return `<span class="error">head: ${filename}: No such file or directory</span>`;
    }
},

    grep: (args) => {
        if (!args || args.length < 2) {
            return '<span class="error">grep: missing operands</span>\n<span class="success">Usage:</span> grep [pattern] [file]';
        }
        
        const pattern = args[0].toLowerCase();
        const filename = args[1];
        
        if (filename === 'project1.md') {
            if (pattern.includes('react') || pattern.includes('javascript')) {
                return `<span class="success">Found matches in ${filename}:</span>
                    • Frontend: React 18, Redux Toolkit, Tailwind CSS
                    • JavaScript, Node.js, Express.js`;
            } else if (pattern.includes('ecommerce') || pattern.includes('commerce')) {
                return `<span class="success">Found matches in ${filename}:</span>
                    • E-Commerce Platform
                    • Full-stack e-commerce solution`;
            }
        }
        
        return `<span class="error">grep: no matches found for "${pattern}" in ${filename}</span>`;
    },

    download: (args) => {
        if (!args || args.length === 0) {
            return '<span class="error">download: missing operand</span>';
        }
        
        const filename = args[0];
        if (filename === 'resume.pdf') {
            return `<span class="success">Initiating download...</span>
                <span class="highlight">📄 Resume Download</span>
                • <span class="success">File:</span> james_postadan_resume.pdf
                • <span class="success">Size:</span> 245 KB
                • <span class="success">Direct Link:</span> japostadan.dev/resume.pdf
                
                <span class="success">✅ Download would start in a real browser</span>`;
        } else {
            return `<span class="error">download: ${filename}: File not available for download</span>`;
        }
    },

    find: (args) => {
        if (!args || args.length === 0) {
            return `<span class="success">Found files:</span>
                ./about.txt
                ./contact.md  
                ./README.md
                ./skills.json
                ./project1.md
                ./project2.md
                ./project3.md
                ./project4.md
                ./project5.md
                ./resume.pdf`;
        }
        
        const pattern = args[0].toLowerCase();
        const matches = [
            'project1.md', 'project2.md', 'project3.md', 'project4.md', 'project5.md',
            'about.txt', 'contact.md', 'README.md', 'skills.json', 'resume.pdf'
        ].filter(file => file.toLowerCase().includes(pattern));
        
        if (matches.length > 0) {
            return `<span class="success">Found matches:</span>\n${matches.map(f => `./` + f).join('\n')}`;
        } else {
            return `<span class="error">find: no files matching "${pattern}"</span>`;
        }
    },

    wc: (args) => {
        if (!args || args.length === 0) {
            return '<span class="error">wc: missing operand</span>';
        }
        
        const filename = args[0];
        const wordCounts = {
            'project1.md': { lines: 45, words: 320, chars: 2180 },
            'project2.md': { lines: 38, words: 285, chars: 1920 },
            'project3.md': { lines: 42, words: 310, chars: 2050 },
            'project4.md': { lines: 40, words: 295, chars: 1980 },
            'project5.md': { lines: 44, words: 325, chars: 2150 },
            'README.md': { lines: 20, words: 145, chars: 980 },
            'about.txt': { lines: 25, words: 180, chars: 1200 }
        };
        
        if (wordCounts[filename]) {
            const count = wordCounts[filename];
            return `<span class="success">${count.lines} ${count.words} ${count.chars} ${filename}</span>`;
        } else {
            return `<span class="error">wc: ${filename}: No such file or directory</span>`;
        }
    }
};

function executeCommand(commandLine) {
    const parts = commandLine.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1); // Get all arguments after the command
    
    console.log('Command:', command, 'Args:', args); // Debug line - remove later
    
    // Add command to terminal
    const commandDiv = document.createElement('div');
    commandDiv.className = 'line';
    commandDiv.innerHTML = `<span class="prompt">james@portfolio:~$</span> <span class="command">${commandLine}</span>`;
    
    const inputLine = document.querySelector('.input-line');
    terminalContent.insertBefore(commandDiv, inputLine);
    
    // Execute command
    let output = '';
    if (commands[command]) {
        // Check if command needs arguments
        if (command === 'cat' || command === 'download' || command === 'file' || 
            command === 'head' || command === 'grep' || command === 'find' || 
            command === 'wc' || command === 'matrix') {
            output = commands[command](args);
        } else {
            output = commands[command]();
        }
    } else if (command === '') {
        output = '';
    } else {
        output = `<span class="error">Command not found: ${command}</span>\nType <span class="help-command" onclick="executeCommand('help')">help</span> for available commands.`;
    }
    
    if (output && command !== 'clear') {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'line output';
        outputDiv.innerHTML = output;
        terminalContent.insertBefore(outputDiv, inputLine);
        
        // Add spacing
        const spaceDiv = document.createElement('div');
        spaceDiv.className = 'line';
        spaceDiv.innerHTML = '<br>';
        terminalContent.insertBefore(spaceDiv, inputLine);
    }
    
    // Scroll to bottom
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

function setupCommandInput() {
    const input = document.getElementById('command-input');
    if (!input) return;
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value;
            if (command.trim()) {
                commandHistory.unshift(command);
                historyIndex = -1;
            }
            executeCommand(command);
            input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            } else if (historyIndex === 0) {
                historyIndex = -1;
                input.value = '';
            }
        }
    });
    
    input.focus();
}
        
// Initialize
setupCommandInput();
        
 // Auto-focus input when clicking anywhere
document.addEventListener('click', () => {
    const input = document.getElementById('command-input');
    if (input) input.focus();
});


// Enhanced Matrix effect for portfolio
function createMatrixEffect() {
    // Remove any existing canvas
    const existingCanvas = document.querySelector('#matrix canvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Style the canvas
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    
    // Matrix characters - mix of code-related symbols
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    const matrixArray = matrix.split("");
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];
    
    // Initialize drops
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    function draw() {
        // Create fade effect
        ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set text properties
        ctx.font = fontSize + 'px "Fira Code", monospace';
        
        for (let i = 0; i < drops.length; i++) {
            // Create gradient effect - brighter at the "head" of the drop
            const y = drops[i] * fontSize;
            
            // Bright green for the leading character
            ctx.fillStyle = '#0004ffff';
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, y);
            
            // Dimmer green for trailing characters
            ctx.fillStyle = 'rgba(0, 76, 255, 0.7)';
            if (y > fontSize) {
                const prevText = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(prevText, i * fontSize, y - fontSize);
            }
            
            ctx.fillStyle = 'rgba(0, 102, 255, 0.4)';
            if (y > fontSize * 2) {
                const prevText2 = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(prevText2, i * fontSize, y - fontSize * 2);
            }
            
            // Reset drop when it reaches bottom
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    // Start animation
    const intervalId = setInterval(draw, 33); 
    
    // Handle window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Recalculate columns
        const newColumns = Math.floor(canvas.width / fontSize);
        drops.length = newColumns;
        for (let x = drops.length; x < newColumns; x++) {
            drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
        }
    });
    
    // Append to matrix container
    const matrixContainer = document.getElementById('matrix');
    if (matrixContainer) {
        matrixContainer.appendChild(canvas);
    } else {
        console.warn('Matrix container (#matrix) not found');
        document.body.appendChild(canvas);
    }
    
    return intervalId; // Return interval ID for potential cleanup
}
// Initialize matrix effect when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure terminal is ready
    setTimeout(() => {
        createMatrixEffect();
    }, 500);
});
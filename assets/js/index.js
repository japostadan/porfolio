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
        return `<span class="directory">projects/</span>    <span class="directory">skills/</span>    <span class="file">about.txt</span>    <span class="file">contact.md</span>    <span class="file">resume.pdf</span>`;
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
 
    cat: (args) => {
        if (!args || args.length === 0) {
            return '<span class="error">cat: missing operand</span>';
        }
        
        const file = args[0];
        if (file === 'about.txt') {
            return commands.about();
        } else if (file === 'contact.md') {
            return commands.contact();
        } else if (file === 'project1.md') {
            return `<span class="highlight">Project: E-Commerce Platform</span>
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                <span class="success">Description:</span>
                A full-stack e-commerce platform built with modern web technologies.
                Features include user authentication, product catalog, shopping cart,
                payment processing, and admin dashboard.

                <span class="success">Key Features:</span>
                • User registration and authentication
                • Product search and filtering
                • Shopping cart functionality
                • Secure payment processing with Stripe
                • Order management system
                • Admin panel for inventory management

                <span class="success">Technologies Used:</span>
                • Frontend: React, Redux, Tailwind CSS
                • Backend: Node.js, Express.js
                • Database: MongoDB
                • Payment: Stripe API
                • Deployment: Docker, AWS

                <span class="success">GitHub:</span> github.com/japostadan/ecommerce-platform
                <span class="success">Live Demo:</span> ecommerce-demo.japostadan.dev`;
            } else {
                return `<span class="error">cat: ${file}: No such file or directory</span>`;
            }
    }
};

 function executeCommand(commandLine) {
     const parts = commandLine.trim().split(' ');
     const command = parts[0].toLowerCase();
     const args = parts.slice(1);
     
     // Add command to terminal
     const commandDiv = document.createElement('div');
     commandDiv.className = 'line';
     commandDiv.innerHTML = `<span class="prompt">james@portfolio:~$</span> <span class="command">${commandLine}</span>`;
     
     const inputLine = document.querySelector('.input-line');
     terminalContent.insertBefore(commandDiv, inputLine);
     
     // Execute command
     let output = '';
     if (commands[command]) {
         if (command === 'cat') {
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
 
 // Matrix effect (optional)
 function createMatrixEffect() {
     const canvas = document.createElement('canvas');
     const ctx = canvas.getContext('2d');
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     
     const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
     const matrixArray = matrix.split("");
     
     const fontSize = 10;
     const columns = canvas.width / fontSize;
     const drops = [];
     
     for (let x = 0; x < columns; x++) {
         drops[x] = 1;
     }
     
     function draw() {
         ctx.fillStyle = 'rgba(13, 17, 23, 0.04)';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         
         ctx.fillStyle = '#0f3460';
         ctx.font = fontSize + 'px monospace';
         
         for (let i = 0; i < drops.length; i++) {
             const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
             ctx.fillText(text, i * fontSize, drops[i] * fontSize);
             
             if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                 drops[i] = 0;
             }
             drops[i]++;
         }
     }
     
     setInterval(draw, 35);
     document.getElementById('matrix').appendChild(canvas);
 }
 
 // Uncomment to enable matrix effect
createMatrixEffect();
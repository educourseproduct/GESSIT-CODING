// API Contract Configuration
const API_URL = 'http://localhost:5050/api';

// Check current page
const currentPage = window.location.pathname.split('/').pop();

// --- AUTH PAGE LOGIC ---
if (currentPage === 'index.html' || currentPage === '') {
    const authForm = document.getElementById('auth-form');
    const toggleLink = document.getElementById('toggle-link');
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const message = document.getElementById('message');
    let isLogin = true;

    // Toggle Login/Register
    toggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        formTitle.textContent = isLogin ? 'Login' : 'Register';
        submitBtn.textContent = isLogin ? 'Login' : 'Register';
        document.getElementById('toggle-msg').textContent = isLogin ? 'Belum punya akun?' : 'Sudah punya akun?';
        toggleLink.textContent = isLogin ? 'Register' : 'Login';
        message.textContent = '';
    });

    // Handle Form Submit
    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const endpoint = isLogin ? '/auth/login' : '/auth/register';

        try {
            const res = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if (res.ok) {
                if (isLogin && data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', data.username);
                    window.location.href = 'dashboard.html';
                } else {
                    message.textContent = 'Register berhasil! Silakan login.';
                    message.style.color = 'green';
                }
            } else {
                message.textContent = data.message || 'Error occurred';
                message.style.color = 'red';
            }
        } catch (error) {
            message.textContent = 'Server error. Pastikan backend berjalan!';
            message.style.color = 'red';
        }
    });
}

// --- DASHBOARD PAGE LOGIC ---
if (currentPage === 'dashboard.html') {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    // Redirect if not logged in
    if (!token) {
        window.location.href = 'index.html';
    }

    document.getElementById('welcome-user').textContent = `Hi, ${username}!`;

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });

    // Fetch Tasks
    async function loadTasks() {
        try {
            const res = await fetch(`${API_URL}/tasks`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const tasks = await res.json();
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = '';

            tasks.forEach(task => {
                const li = document.createElement('li');
                li.className = task.status;
                li.innerHTML = `
                    <div>
                        <strong>${task.title}</strong>
                        <p>${task.description}</p>
                        <small>Status: ${task.status}</small>
                    </div>
                    <div class="task-actions">
                        <button class="btn-edit" onclick="editTask('${task._id}', '${task.status}')">Edit</button>
                        <button class="btn-delete" onclick="deleteTask('${task._id}')">Hapus</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    }

    // Add Task
    document.getElementById('task-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-desc').value;

        try {
            const res = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ title, description })
            });

            if (res.ok) {
                document.getElementById('task-title').value = '';
                document.getElementById('task-desc').value = '';
                loadTasks();
            } else {
                alert('Gagal menambah tugas');
            }
        } catch (error) {
            console.error(error);
        }
    });

    // Delete Task
    window.deleteTask = async (id) => {
        if(confirm('Yakin ingin menghapus tugas ini?')) {
            try {
                const res = await fetch(`${API_URL}/tasks/${id}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) loadTasks();
                else alert('Gagal menghapus / Bukan tugas Anda!');
            } catch (error) {
                console.error(error);
            }
        }
    };

    // Edit Task (Simple toggle status for demo)
    window.editTask = async (id, currentStatus) => {
        const newStatus = prompt('Ubah status (pending / in-progress / done):', currentStatus);
        if (newStatus && ['pending', 'in-progress', 'done'].includes(newStatus)) {
            try {
                const res = await fetch(`${API_URL}/tasks/${id}`, {
                    method: 'PUT',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ status: newStatus })
                });
                if (res.ok) loadTasks();
                else alert('Gagal mengupdate / Bukan tugas Anda!');
            } catch (error) {
                console.error(error);
            }
        }
    };

    // Initial Load
    loadTasks();
}
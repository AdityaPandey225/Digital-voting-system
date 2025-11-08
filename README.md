# 🗳️ Digital Voting System

A secure and user-friendly online voting system built with Django that allows organizations to conduct elections digitally with features like OTP verification, candidate management, and real-time vote tracking.

![Django](https://img.shields.io/badge/Django-3.1.7-green.svg)
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Active-success.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## ✨ Features

### 🔐 Security Features
- **OTP Verification**: SMS-based OTP verification for voter authentication
- **Single Vote Per Position**: Each voter can vote for only one candidate per position
- **Vote Tracking**: Prevents duplicate voting with database constraints
- **Secure Authentication**: Django's built-in authentication system

### 👥 User Management
- **Voter Registration**: Easy voter registration with phone number verification
- **Admin Dashboard**: Comprehensive admin panel for managing elections
- **Voter Dashboard**: User-friendly interface for voters to cast their votes

### 🎯 Election Management
- **Position Management**: Create and manage multiple election positions
- **Candidate Management**: Add candidates with photos and bios
- **Ballot Generation**: Dynamic ballot generation with radio button selection
- **Vote Preview**: Preview votes before final submission
- **Results Display**: View election results in real-time

### 📊 Admin Features
- **Election Control**: Start, stop, and manage elections
- **Voter Management**: View and manage registered voters
- **Result Analytics**: View detailed voting statistics
- **PDF Reports**: Generate PDF reports of election results

## 🛠️ Technology Stack

### Backend
- **Django 3.1.7**: High-level Python web framework
- **Python 3.8+**: Programming language
- **MySQL**: Database (configurable to SQLite for development)
- **Pillow**: Image processing for candidate photos

### Frontend
- **Bootstrap**: Responsive CSS framework
- **jQuery**: JavaScript library
- **iCheck**: Custom checkbox/radio button styling
- **Chart.js**: Data visualization for results

### Additional Libraries
- **django-renderpdf**: PDF generation for reports
- **requests**: HTTP library for SMS API integration

## 📦 Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)
- MySQL (optional, SQLite can be used for development)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/AdityaPandey225/Digital-voting-system.git
cd Digital-voting-system
```

### Step 2: Create Virtual Environment
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Configure Database
1. Open `e_voting/settings.py`
2. Configure your database settings (SQLite for development or MySQL for production)
3. For SQLite (default), no additional configuration needed

### Step 5: Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 6: Create Superuser
```bash
python manage.py createsuperuser
```

### Step 7: Run the Development Server
```bash
python manage.py runserver
```

The application will be available at `http://127.0.0.1:8000/`

## 🚀 Usage

### For Administrators

1. **Login**: Access the admin panel at `/admin/` using your superuser credentials
2. **Create Positions**: Navigate to Positions and add election positions
3. **Add Candidates**: Add candidates with their photos and bios for each position
4. **Manage Voters**: View and manage registered voters
5. **View Results**: Access real-time voting results and generate PDF reports

### For Voters

1. **Register**: Create an account with your details and phone number
2. **Verify OTP**: Enter the OTP sent to your phone number
3. **Cast Vote**: Select your preferred candidate for each position
4. **Preview**: Review your selections before submitting
5. **Submit**: Confirm and submit your vote

### Important Notes
- Each voter can vote for **only one candidate per position**
- Once a vote is submitted, it cannot be changed
- OTP verification is required before voting (can be bypassed in development mode)

## 📁 Project Structure

```
Digital-voting-system/
│
├── account/                 # User authentication app
│   ├── models.py            # Custom user model
│   ├── views.py             # Login/registration views
│   └── ...
│
├── administrator/           # Admin dashboard app
│   ├── views.py             # Admin views and PDF generation
│   ├── models.py            # Admin models
│   └── templates/           # Admin templates
│
├── voting/                  # Core voting app
│   ├── models.py            # Voter, Position, Candidate, Votes models
│   ├── views.py             # Voting logic and ballot generation
│   ├── migrations/          # Database migrations
│   │   └── 0002_add_unique_vote_constraint.py
│   └── templates/           # Voting templates
│
├── e_voting/                # Main project settings
│   ├── settings.py          # Django settings
│   ├── urls.py              # Main URL configuration
│   └── wsgi.py              # WSGI configuration
│
├── media/                   # User-uploaded files (candidate photos)
├── static/                   # Static files (CSS, JS, images)
├── requirements.txt         # Python dependencies
├── manage.py                # Django management script
└── README.md                # This file
```

## 📸 Screenshots

> **Note**: Add screenshots of your application here. You can include:
- Login/Registration page
- Admin dashboard
- Voter ballot interface
- Results page
- PDF reports

## 🔧 Configuration

### SMS OTP Settings
To enable SMS OTP verification, set up environment variables:
```bash
export SMS_EMAIL=your_email@example.com
export SMS_PASSWORD=your_password
```

Or disable OTP in development by setting `SEND_OTP = False` in `e_voting/settings.py`

### Database Configuration
Edit `e_voting/settings.py` to configure your database:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_database_name',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines
- Follow PEP 8 Python style guide
- Write clear commit messages
- Add comments to complex code
- Test your changes before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Aditya Pandey**

- GitHub: [@AdityaPandey225](https://github.com/AdityaPandey225)
- Repository: [Digital-voting-system](https://github.com/AdityaPandey225/Digital-voting-system)

## 🙏 Acknowledgments

- Django community for the excellent framework
- Bootstrap team for the responsive UI framework
- All contributors and users of this project

## 📞 Support

If you encounter any issues or have questions, please:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation

## 🔮 Future Enhancements

- [ ] Email notifications
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Blockchain integration for vote immutability
- [ ] Mobile app support
- [ ] Real-time vote counting updates
- [ ] Voter authentication via biometrics

---

⭐ If you find this project helpful, please consider giving it a star!

Made with ❤️ using Django


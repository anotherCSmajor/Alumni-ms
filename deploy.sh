#!/bin/bash

# AlumniVerse Deployment Script
# This script helps you deploy your application to GitHub Pages

echo "🚀 AlumniVerse Deployment Script"
echo "================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if git is initialized
if [ ! -d ".git" ]; then
    print_error "Git repository not initialized. Please run 'git init' first."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    print_warning "node_modules not found. Installing dependencies..."
    npm install
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    print_warning ".env file not found. Creating from template..."
    if [ -f "env.example" ]; then
        cp env.example .env
        print_warning "Please edit .env file with your actual values before deploying."
    else
        print_error "env.example file not found. Please create .env file manually."
        exit 1
    fi
fi

# Get repository name from package.json
REPO_NAME=$(node -p "require('./package.json').name")
HOMEPAGE=$(node -p "require('./package.json').homepage" 2>/dev/null || echo "")

if [ -z "$HOMEPAGE" ]; then
    print_warning "Homepage not set in package.json. Please update it with your GitHub Pages URL."
fi

# Build the project
print_status "Building the project..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully!"
else
    print_error "Build failed. Please check the errors above."
    exit 1
fi

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    print_status "Installing gh-pages..."
    npm install gh-pages --save-dev
fi

# Deploy to GitHub Pages
print_status "Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    print_success "Deployment completed successfully!"
    echo ""
    echo "🎉 Your application is now live at:"
    echo "   $HOMEPAGE"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Visit your live application"
    echo "   2. Test all functionality"
    echo "   3. Share with others"
    echo "   4. Monitor performance"
    echo ""
    print_status "Deployment script completed!"
else
    print_error "Deployment failed. Please check the errors above."
    exit 1
fi

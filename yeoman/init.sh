# Install Yeoman
npm install -g yo

# Install generator
npm install -g generator-webapp

# Check installed generators
yo -h

# Scaffold new project
yo webapp

# Run livereload
grunt serve


# Custom generator
# ----------------

# Link to local generator
npm link

# Init project
yo example

# Use subgenerator
yo example:page

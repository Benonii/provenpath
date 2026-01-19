FROM oven/bun:1.2.12

WORKDIR /app

# Install system deps needed for native modules
RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  openssl \
  ca-certificates \
  curl \
  && rm -rf /var/lib/apt/lists/*

# Install pnpm
ENV SHELL=/bin/bash
RUN curl -fsSL https://get.pnpm.io/install.sh | SHELL=/bin/bash sh - && \
    export PNPM_HOME="/root/.local/share/pnpm" && \
    export PATH="$PNPM_HOME:$PATH" && \
    pnpm --version

# Copy workspace configuration and install dependencies
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
COPY apps/backend/package.json ./apps/backend/
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Temporarily remove packageManager field to allow pnpm to install
RUN bun -e "const pkg = JSON.parse(await Bun.file('package.json').text()); delete pkg.packageManager; await Bun.write('package.json', JSON.stringify(pkg, null, 2));"
RUN pnpm install --ignore-scripts

# Copy source code
COPY . .

WORKDIR /app/apps/backend
EXPOSE 5000
CMD ["bun", "run", "start"]

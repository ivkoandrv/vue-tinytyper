import type { Configuration } from 'semantic-release';

const config: Configuration ={
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
    ],
}

export default config
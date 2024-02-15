export default function GithubBio({ html }) {
    return html`
    <style>
    :host {
        display: block;
        margin-bottom: 2rem;
        padding-left: 1rem;
    }
    pre {
        white-space: pre-line;
    }
    </style>
    <h3 class="text1 mb1">My Github Profile</h3>
    <pre>
   Username: ${github.login}
   Location: ${github.location}
    </pre> 
    `
}
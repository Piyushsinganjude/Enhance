export default function MyHeader({ html }) {
    return html`
    <style>
    :host {
        display: block;
        margin-bottom: 2rem;
        padding-left: 1rem;
        border-left: solid 3px navy;
    }
    :: slotted(*) {
        color: white;
    }
    a{
        text-decortion : underline;
        color: blue;
    }
    </style>
      <header class=mb2 text4>
        <slot name="title"Hello></slot>
        <nav class>
          <a href=/>home</a>
          <a href=/about>about</a>
        </nav>
      </header>
    `
  }
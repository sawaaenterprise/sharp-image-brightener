<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Preserve the reference portfolio and CV as TanStack content routes with shared CSS tokens, UI Button variants, and CV data; this keeps the reproduction aligned with the original without replacing the framework.
- Store original imported media using project-scoped asset pointers; source-project asset pointers cannot be served reliably by this project.
- Use the shared CV download control on both content routes, verifying PDF bytes before saving and preserving a direct open-PDF fallback; mobile browsers may restrict programmatic saving.
- Import edited portrait images as bundled assets while retaining original media pointers; this preserves the source and serves generated edits reliably.

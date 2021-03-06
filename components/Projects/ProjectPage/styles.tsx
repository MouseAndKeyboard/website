import { css } from '@emotion/core'

export const styles = (theme, image) => css`
  .pad {
    padding: 7rem 0;
    min-height: calc(60vh - 72px);
  }

  .bg {
    background-image: url('${image}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .breadcrumbs > ol {
    background-color: transparent;
    padding: 0;

    // .active-tab {
    //   color: ${theme.colors.accent};
    // }
  }
`

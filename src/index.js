import styles from './styles.css?url';

console.log(`
This href attribute should not include a ?used query parameter:
<link rel="stylesheet" href="${styles}">
`);

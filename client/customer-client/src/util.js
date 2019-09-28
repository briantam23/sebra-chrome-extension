export const handleCopyClick = () => {
    const copyText = document.getElementById('copyInput');

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand('copy');
}
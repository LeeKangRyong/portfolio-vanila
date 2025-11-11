async function isAssetExists(assetPath) {
    try {
        const response = await fetch(assetPath, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

function buildAssetPath(assetName, extensionName) {
    return `/assets/skill/${assetName}.${extensionName}`;
}

async function useAsset(assetName) {
    const extensionNames = ['png', 'jpg', 'jpeg'];

    for (const extensionName of extensionNames) {
        const assetFilepath = buildAssetPath(assetName, extensionName);
        const assetExists = await isAssetExists(assetFilepath);

    if (assetExists) {
        return assetFilepath;
    }
}
    console.error(`Asset not found for any common extensions: ${assetName}`);
    return null;
}

export { useAsset };
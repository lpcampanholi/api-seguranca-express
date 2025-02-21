module.exports = app;
const directoryPath = path.join(__dirname, '../');
const changeExtension = (dirPath: string) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach((file) => {
            const filePath = path.join(dirPath, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                changeExtension(filePath);
            } else if (path.extname(file) === '.js') {
                const newFilePath = filePath.replace('.js', '.ts');
                fs.rename(filePath, newFilePath, (err) => {
                    if (err) {
                        console.log('Error renaming file: ' + err);
                    } else {
                        console.log(`Renamed: ${filePath} -> ${newFilePath}`);
                    }
                });
            }
        });
    });
};

changeExtension(directoryPath);
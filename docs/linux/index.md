## Command

::: warning Tips
https://www.bitslovers.com/tag/command/
:::

::: details Reduce PDF Size with Ghostscript
```shell
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/prepress -dNOPAUSE -dQUIET -dBATCH -sOutputFile=compressed_PDF_file.pdf input_PDF_file.pdf
```

The dPDFSETTINGS parameter is what defines the compression level and so the quality of your compressed PDF file.

The possibles values for dPDFSETTINGS are:

/prepress -> Higher quality (300 dpi) but bigger size

/ebook -> Medium quality (150 dpi) with moderate output file size

/screen -> Lower quality (72 dpi) but smallest possible output file size

The /prepress is the default option if you don’t specify any options.
:::

::: details Merge PDF with GhostScript
```shell
gs -q -sPAPERSIZE=letter -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/prepress -sOutputFile=outputFile.pdf fileToMerge1.pdf fileToMerge2.pdf fileToMerge3.pdf
```

The dPDFSETTINGS parameter is what defines the compression level and so the quality of your compressed PDF file.

The possibles values for dPDFSETTINGS are:

/prepress -> Higher quality (300 dpi) but bigger size

/ebook -> Medium quality (150 dpi) with moderate output file size

/screen -> Lower quality (72 dpi) but smallest possible output file size

The /prepress is the default option if you don’t specify any options.
:::

::: details Convert JPG to PDF with ImageMagick
```shell
convert -density 300 fileToConvert.jpg outputFile.pdf
```
-density specify the dpi that the PDF is rendered. Placing this to 300/600 will give pretty good quality for your PDF file.
:::

::: details Move a file
```shell
mv -v fileToMove destinationForTheFile
```
:::

::: details Rename a file
```shell
mv fileToRename newNameOfFile
```
:::

::: details Execute a script .sh
```shell
zsh my-script.sh or ./my-script.sh
```
:::

::: details Copy a file
```shell
cp sourceFile destinationFile
-r for recursive
```
:::

::: details Remove a file or directory
```shell
rm fileToRemove
-Rf for recursive with force
```
:::

::: details Making a directory or file
```shell
mkdir myDirectory
touch myFile
```
:::

::: details Display Manjaro version
```shell
lsb_release -drc
```
:::

::: details Grep search
```shell
cat myFile | grep "my research"
```
:::

::: details Display where am i
```shell
pwd
```
:::

::: details Display all service on system
```shell
systemctl list-units --all
```
:::
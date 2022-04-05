## Command

::: warning Tips
https://www.bitslovers.com/tag/command/
:::

::: details Reduce PDF Size with Ghostscript
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/prepress -dNOPAUSE -dQUIET -dBATCH -sOutputFile=compressed_PDF_file.pdf input_PDF_file.pdf

The dPDFSETTINGS parameter is what defines the compression level and so the quality of your compressed PDF file.

The possibles values for dPDFSETTINGS are:

/prepress -> Higher quality (300 dpi) but bigger size

/ebook -> Medium quality (150 dpi) with moderate output file size

/screen -> Lower quality (72 dpi) but smallest possible output file size

The /prepress is the default option if you don’t specify any options.
:::

::: details Merge PDF with GhostScript
gs -q -sPAPERSIZE=letter -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/prepress -sOutputFile=outputFile.pdf fileToMerge1.pdf fileToMerge2.pdf fileToMerge3.pdf
:::

::: details Convert JPG to PDF with ImageMagick
convert -density 300 fileToConvert.jpg outputFile.pdf
-density specify the dpi that the PDF is rendered. Placing this to 300/600 will give pretty good quality for your PDF file.
:::

::: details Move a file 
mv -v fileToMove destinationForTheFile
:::

::: details Rename a file 
mv fileToRename newNameOfFile
:::
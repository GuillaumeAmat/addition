#!/bin/sh


for size in 29 30 36 40 48 50 58 60 72 76 80 86 96 99 100 114 120 128 144 150 152 159 180
do
    inkscape -z -f "icon.svg" -e "../res/icon-$size.png" -h $size -w $size
done

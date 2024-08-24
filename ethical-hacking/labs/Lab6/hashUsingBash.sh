#!/bin/sh
for i in $(cat q5); do echo -n "$i"| md5sum | tr -d " -" >> hashes; done
function pagelength(unlimited) {
	let pagelengthelement = document.getElementById('limit-pagelength');
	let defaultmin = parseFloat(jQuery('#pagelength').attr('defaultmin'));
	let defaultmax = parseFloat(jQuery('#pagelength').attr('defaultmax'));
	if (pagelengthelement.checked) {
		jQuery('#pagelength')[0].setAttribute('min', unlimited);
		jQuery('#pagelength')[0].setAttribute('max', unlimited);
		if (parseFloat(jQuery('#pagelength').val()) != parseFloat(unlimited)) {
			jQuery('#pagelength').val(unlimited);
		}
		return unlimited;
	} else {
		if (parseFloat(jQuery('#pagelength').val()) > defaultmax) {
			jQuery('#pagelength').val(String(defaultmax));
		} else if (parseFloat(jQuery('#pagelength').val()) < defaultmin) {
			jQuery('#pagelength').val(String(defaultmin));
		}
		jQuery('#pagelength')[0].setAttribute('min', String(defaultmin));
		jQuery('#pagelength')[0].setAttribute('max', String(defaultmax));
		return jQuery('#pagelength').val();
	}
}

function limitlinelength() {
	let defaultmin = parseFloat(jQuery('#linelength').attr('defaultmin'));
	let defaultmax = parseFloat(jQuery('#linelength').attr('defaultmax'));
	if (jQuery("#linelength")[0].hasAttribute('min') || jQuery("#linelength")[0].hasAttribute('max')) {
		jQuery("#linelength").removeAttr('min');
		jQuery("#linelength").removeAttr('max');
	} else {
		if (parseFloat(jQuery('#linelength').val()) > defaultmax) {
			jQuery('#linelength').val(String(defaultmax));
		} else if (parseFloat(jQuery('#linelength').val()) < defaultmin) {
			jQuery('#linelength').val(String(defaultmin));
		}
		jQuery('#linelength')[0].setAttribute('min', String(defaultmin));
		jQuery('#linelength')[0].setAttribute('max', String(defaultmax));
	}
}

function limitpagelength() {
	let pagelengthelement = document.getElementById('limit-pagelength');
	let defaultmin = parseFloat(jQuery('#pagelength').attr('defaultmin'));
	let defaultmax = parseFloat(jQuery('#pagelength').attr('defaultmax'));
	if (pagelengthelement.checked) {
		jQuery('#pagelength')[0].setAttribute('min', pagelength(jQuery('#pagelength').attr('unlimited')));
		jQuery('#pagelength')[0].setAttribute('max', pagelength(jQuery('#pagelength').attr('unlimited')));
		if (parseFloat(jQuery('#pagelength').val()) != parseFloat(pagelength(jQuery('#pagelength').attr('unlimited')))) {
			jQuery('#pagelength').val(pagelength(jQuery('#pagelength').attr('unlimited')));
		}
		EnableDisable('pagenumbers', [], ['0', '1', '2'], ['3']);
		EnableDisable('alignpagenumbersone', [], ['0', '1'], []);
		EnableDisable('alignpagenumbers', [], ['0', '1', '2'], []);
	} else {
		if (parseFloat(jQuery('#pagelength').val()) > defaultmax) {
			jQuery('#pagelength').val(String(defaultmax));
		} else if (parseFloat(jQuery('#pagelength').val()) < defaultmin) {
			jQuery('#pagelength').val(String(defaultmin));
		}
		jQuery('#pagelength')[0].setAttribute('min', String(defaultmin));
		jQuery('#pagelength')[0].setAttribute('max', String(defaultmax));
		EnableDisable('pagenumbers', ['0', '1', '2'], [], []);
		EnableDisable('alignpagenumbersone', ['0', '1'], [], []);
		EnableDisable('alignpagenumbers', ['0', '1', '2'], [], []);
	}
}

function saf(metinsaf, ayrac, shadda) {
	var safmetin, irun, choosen, counter, s, c;
	safmetin = "";
	switch (ayrac) {
		case 0:
			irun = "";
			break;
		default:
			irun = ayrac;
	}
	if (metinsaf != undefined) {
		for (counter = 0; counter < metinsaf.length; counter += 1) {
			choosen = metinsaf[counter];
			s = "";
			if (!(choosen != "ّ" || shadda != 2)) {
				c = 0;
				do {
					choosen = metinsaf[counter - c];
					c += 1;
				} while (saf(choosen, "", 1) == "");
			}
			switch (choosen) {
				case "ا":
				case "ء":
				case "ى":
				case "ب":
				case "ج":
				case "د":
				case "ه":
				case "و":
				case "ؤ":
				case "ز":
				case "ح":
				case "ط":
				case "ي":
				case "ك":
				case "ل":
				case "م":
				case "ن":
				case "س":
				case "ع":
				case "ف":
				case "ص":
				case "ق":
				case "ر":
				case "ش":
				case "ت":
				case "ض":
				case "ة":
				case "ث":
				case "خ":
				case "ذ":
				case "ض":
				case "ظ":
				case "غ":
				case "ئ":
					s = choosen + irun;
					break;
				case "أ":
				case "إ":
				case "آ":
				case "ىٰ":
					s = "ا" + irun;
					break;
				case "ک":
					s = "ک" + irun;
					break;
				case "ﮒ":
					s = "ﮒ" + irun;
					break;
				case "ی":
					s = "ی" + irun;
					break;
				case "ۀ":
					s = "ۀ" + irun;
					break;
				case "א":
				case "ב":
				case "ג":
				case "ד":
				case "ה":
				case "ו":
				case "ז":
				case "ח":
				case "ט":
				case "י":
				case "ל":
				case "ס":
				case "ע":
				case "ק":
				case "ר":
				case "ש":
				case "ת":
				case "כ":
				case "ך":
				case "מ":
				case "ם":
				case "נ":
				case "ן":
				case "פ":
				case "ף":
				case "צ":
				case "ץ":
				case "A":
				case "B":
				case "C":
				case "Ç":
				case "D":
				case "E":
				case "F":
				case "G":
				case "Ğ":
				case "H":
				case "I":
				case "İ":
				case "J":
				case "K":
				case "L":
				case "M":
				case "N":
				case "O":
				case "Ö":
				case "P":
				case "R":
				case "S":
				case "Ş":
				case "T":
				case "U":
				case "Ü":
				case "V":
				case "Y":
				case "Z":
				case "a":
				case "b":
				case "c":
				case "ç":
				case "d":
				case "e":
				case "f":
				case "g":
				case "ğ":
				case "h":
				case "ı":
				case "i":
				case "j":
				case "k":
				case "l":
				case "m":
				case "n":
				case "o":
				case "ö":
				case "p":
				case "r":
				case "s":
				case "ş":
				case "t":
				case "u":
				case "ü":
				case "v":
				case "y":
				case "z":
					s = choosen + irun;
					break;
				case " ":
					switch (ayrac) {
						case "":
							s = choosen;
							break;
						case 0:
							s = "";
							break;
						default:
							s = irun;
					}
					break;
				default:
					s = "";
			}
			safmetin += s;
		}
	}
	return safmetin;
}

function EnableDisable(identity, toenable, todisable, toselect) {
	var someselected = 0;
	for (let e = 0; e < toenable.length; e += 1) {
		jQuery("#" + identity + " option[value='" + toenable[e] + "']").removeAttr('disabled');
		if (jQuery("#" + identity + " option[value='" + toenable[e] + "']")[0].selected == true) {
			someselected = 1
		} else if (jQuery("#" + identity + " option[value='" + toenable[e] + "']")[0].hasAttribute('selectedbefore')) {
			jQuery("#" + identity + " option[value='" + toenable[e] + "']")[0].selected = true;
			jQuery("#" + identity + " option[value='" + toenable[e] + "']").removeAttr('selectedbefore');
			someselected = 1
		}
	}
	for (let d = 0; d < todisable.length; d += 1) {
		if ((jQuery("#" + identity + " option[value='" + todisable[d] + "']")[0].hasAttribute('selected')) || (jQuery("#" + identity + " option[value='" + todisable[d] + "']")[0].selected == true)) {
			jQuery("#" + identity + " option[value='" + todisable[d] + "']").removeAttr('selected');
			jQuery("#" + identity + " option[value='" + todisable[d] + "']")[0].selected = false;
			jQuery("#" + identity + " option[value='" + todisable[d] + "']")[0].setAttribute('selectedbefore', '')
		}
		jQuery("#" + identity + " option[value='" + todisable[d] + "']")[0].setAttribute('disabled', 'disabled')
	}
	if (!(someselected != 0 || toselect == "")) {
		jQuery("#" + identity + " option[value='" + toselect + "']")[0].selected = true
	}
}

function convertToRoman(num) {
	var singles = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
	var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	var thousands = ["", "M", "MM", "MMM", "MMMM"];
	//turn the number to a string, split individual characters and then turn each one to a number. (abdil.one: thank you)
	var length = num.toString().length;
	var numbers = num.toString().split("").map(Number);
	var roman = '';
	var i = 0;
	switch (length) {
		case 4:
			roman = thousands[numbers[i]];
			i++;
		case 3:
			roman += hundreds[numbers[i]];
			i++;
		case 2:
			roman += tens[numbers[i]];
			i++;
		case 1:
			roman += singles[numbers[i]];
	}
	return roman;
}

function convertToindian(number) {
	return number.replace(/0/g, '٠').replace(/1/g, '١').replace(/2/g, '٢').replace(/3/g, '٣').replace(/4/g, '٤').replace(/5/g, '٥').replace(/6/g, '٦').replace(/7/g, '٧').replace(/8/g, '٨').replace(/9/g, '٩')
}

function numberingstyle(thenumber) {
	let thestyle = document.getElementById('pagenumbers').value;
	if (thenumber > 0) {
		if (thestyle == 0) {
			return String(thenumber);
		} else if (thestyle == 1) {
			return convertToindian(String(thenumber));
		} else if (thestyle == 2) {
			return convertToRoman(String(thenumber));
		} else {
			return "";
		}
	} else {
		return "";
	}
}

function boxandnumberit(shaped, lines, pages) {
	let box = ["─│┌┐└┘", "┄┆┌┐└┘", "┅┇┏┓┗┛", "─│╭╮╰╯", "━┃┏┓┗┛", "═║╔╗╚╝"];
	let xob = [parseFloat(document.getElementById('pageborders').value),
		parseFloat(document.getElementById('horizantalgap').value),
		parseFloat(document.getElementById('verticalgap').value),
		parseFloat(document.getElementById('alignpagenumbersone').value),
		parseFloat(document.getElementById('alignpagenumbers').value),
		0, 1
	];
	let boxed = ["", "", "", String(lines), String(pages), "0", "0"];
	let doxeb = shaped.replace(/\n\n/g, '\n \n').split("\n");
	let thestyle = parseFloat(document.getElementById('pagenumbers').value);
	let boxedlines = 0;
	let sidespace = 0;
	let sidelines = 0;
	let topline = 0;
	let linesofpage = 0;
	let linesremain = 0;
	let completeline = 0;
	if (document.getElementById('beginpagenumbers').checked) {
		xob[5] = 0;
	} else {
		xob[5] = 1;
	}
	xob[6] -= xob[5];
	if (xob[0] < 6) {
		for (linesofpage = 0; linesofpage < doxeb.length; linesofpage = boxedlines) {
			boxed[2] = '';
			boxed[2] += String(box[xob[0]])[2];
			for (topline = 0; topline < parseFloat(boxed[3]) + xob[1] + xob[1]; topline += 1) {
				boxed[2] += String(box[xob[0]])[0];
			}
			boxed[2] += String(box[xob[0]])[3];
			boxed[2] += "\n";
			if (!(xob[2] != 0 || xob[3] != 0 || thestyle == 3)) {
				boxed[2] += String(box[xob[0]])[1];
				if (xob[4] == 0) {
					for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
					boxed[2] += numberingstyle(xob[6]);
					for (sidespace = 0; sidespace < parseFloat(boxed[3]) - numberingstyle(xob[6]).length + xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
				} else if (xob[4] == 1) {
					for (sidespace = 0; sidespace < xob[1] + Math.floor((parseFloat(boxed[3]) - numberingstyle(xob[6]).length) / 2); sidespace += 1) {
						boxed[2] += " ";
					}
					boxed[2] += numberingstyle(xob[6]);
					for (sidespace = 0; sidespace < xob[1] + parseFloat(boxed[3]) - (Math.floor((parseFloat(boxed[3]) - numberingstyle(xob[6]).length) / 2) + numberingstyle(xob[6]).length); sidespace += 1) {
						boxed[2] += " ";
					}
				} else if (xob[4] == 2) {
					for (sidespace = 0; sidespace < parseFloat(boxed[3]) - numberingstyle(xob[6]).length + xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
					boxed[2] += numberingstyle(xob[6]);
					for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
				}
				boxed[2] += String(box[xob[0]])[1];
				boxed[2] += "\n";
			} else {
				for (sidelines = 0; sidelines <= xob[2]; sidelines += 1) {
					if (!(xob[3] != 0 || sidelines != Math.ceil(xob[2] / 2))) {
						boxed[2] += String(box[xob[0]])[1];
						if (xob[4] == 0) {
							for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
								boxed[2] += " ";
							}
							boxed[2] += numberingstyle(xob[6]);
							for (sidespace = 0; sidespace < parseFloat(boxed[3]) - numberingstyle(xob[6]).length + xob[1]; sidespace += 1) {
								boxed[2] += " ";
							}
						} else if (xob[4] == 1) {
							for (sidespace = 0; sidespace < xob[1] + Math.floor((parseFloat(boxed[3]) - numberingstyle(xob[6]).length) / 2); sidespace += 1) {
								boxed[2] += " ";
							}
							boxed[2] += numberingstyle(xob[6]);
							for (sidespace = 0; sidespace < xob[1] + parseFloat(boxed[3]) - (Math.floor((parseFloat(boxed[3]) - numberingstyle(xob[6]).length) / 2) + numberingstyle(xob[6]).length); sidespace += 1) {
								boxed[2] += " ";
							}
						} else if (xob[4] == 2) {
							for (sidespace = 0; sidespace < parseFloat(boxed[3]) - numberingstyle(xob[6]).length + xob[1]; sidespace += 1) {
								boxed[2] += " ";
							}
							boxed[2] += numberingstyle(xob[6]);
							for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
								boxed[2] += " ";
							}
						}
						boxed[2] += String(box[xob[0]])[1];
						boxed[2] += "\n";
					} else {
						boxed[2] += String(box[xob[0]])[1];
						for (sidespace = 0; sidespace < parseFloat(boxed[3]) + xob[1] + xob[1]; sidespace += 1) {
							boxed[2] += " ";
						}
						boxed[2] += String(box[xob[0]])[1];
						boxed[2] += "\n";
					}
				}
			}
			if (parseFloat(boxed[4]) < doxeb.length - linesofpage) {
				linesremain = linesofpage + parseFloat(boxed[4]);
				emptystoadd = 0;
			} else {
				linesremain = doxeb.length - 1;
				emptystoadd = doxeb.length - linesofpage - 1;
			}
			while (boxedlines < linesremain) {
				boxed[2] += String(box[xob[0]])[1];
				for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
					boxed[2] += " ";
				}
				boxed[2] += String(doxeb[boxedlines]);
				for (completeline = 0; completeline < parseFloat(boxed[3]) - String(doxeb[boxedlines]).length; completeline += 1) {
					boxed[2] += " ";
				}
				for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
					boxed[2] += " ";
				}
				boxed[2] += String(box[xob[0]])[1];
				boxed[2] += "\n";
				boxedlines += 1;
			}
			while (String(doxeb[boxedlines]) == " ") {
				if (boxedlines < doxeb.length - 1) {
					boxedlines += 1;
				} else {
					break;
				}
			}
			if (boxedlines == doxeb.length - 1) {
				boxedlines += 1;
			}
			if (emptystoadd > 0) {
				for (sidelines = 0; sidelines < parseFloat(boxed[4]) - emptystoadd; sidelines += 1) {
					boxed[2] += String(box[xob[0]])[1];
					for (sidespace = 0; sidespace < parseFloat(boxed[3]) + xob[1] + xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
					boxed[2] += String(box[xob[0]])[1];
					boxed[2] += "\n";
				}
			}
			if (!(xob[2] != 0 || xob[3] != 1 || thestyle == 3)) {
				boxed[2] += String(box[xob[0]])[1];
				if (xob[4] == 0) {
					for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
					boxed[2] += numberingstyle(xob[6]);
					for (sidespace = 0; sidespace < parseFloat(boxed[3]) - numberingstyle(xob[6]).length + xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
				} else if (xob[4] == 1) {
					for (sidespace = 0; sidespace < xob[1] + Math.floor((parseFloat(boxed[3]) - numberingstyle(xob[6]).length) / 2); sidespace += 1) {
						boxed[2] += " ";
					}
					boxed[2] += numberingstyle(xob[6]);
					for (sidespace = 0; sidespace < xob[1] + parseFloat(boxed[3]) - (Math.floor((parseFloat(boxed[3]) - numberingstyle(xob[6]).length) / 2) + numberingstyle(xob[6]).length); sidespace += 1) {
						boxed[2] += " ";
					}
				} else if (xob[4] == 2) {
					for (sidespace = 0; sidespace < parseFloat(boxed[3]) - numberingstyle(xob[6]).length + xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
					boxed[2] += numberingstyle(xob[6]);
					for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
						boxed[2] += " ";
					}
				}
				boxed[2] += String(box[xob[0]])[1];
				boxed[2] += "\n";
			} else {
				for (sidelines = 0; sidelines <= xob[2]; sidelines += 1) {
					if (!(xob[3] != 1 || sidelines != Math.ceil(xob[2] / 2))) {
						boxed[2] += String(box[xob[0]])[1];
						if (xob[4] == 0) {
							for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
								boxed[2] += " ";
							}
							boxed[2] += numberingstyle(xob[6]);
							for (sidespace = 0; sidespace < parseFloat(boxed[3]) - numberingstyle(xob[6]).length + xob[1]; sidespace += 1) {
								boxed[2] += " ";
							}
						} else if (xob[4] == 1) {
							for (sidespace = 0; sidespace < xob[1] + Math.floor((parseFloat(boxed[3]) - numberingstyle(xob[6]).length) / 2); sidespace += 1) {
								boxed[2] += " ";
							}
							boxed[2] += numberingstyle(xob[6]);
							for (sidespace = 0; sidespace < xob[1] + parseFloat(boxed[3]) - (Math.floor((parseFloat(boxed[3]) - numberingstyle(xob[6]).length) / 2) + numberingstyle(xob[6]).length); sidespace += 1) {
								boxed[2] += " ";
							}
						} else if (xob[4] == 2) {
							for (sidespace = 0; sidespace < parseFloat(boxed[3]) - numberingstyle(xob[6]).length + xob[1]; sidespace += 1) {
								boxed[2] += " ";
							}
							boxed[2] += numberingstyle(xob[6]);
							for (sidespace = 0; sidespace < xob[1]; sidespace += 1) {
								boxed[2] += " ";
							}
						}
						boxed[2] += String(box[xob[0]])[1];
						boxed[2] += "\n";
					} else {
						boxed[2] += String(box[xob[0]])[1];
						for (sidespace = 0; sidespace < parseFloat(boxed[3]) + xob[1] + xob[1]; sidespace += 1) {
							boxed[2] += " ";
						}
						boxed[2] += String(box[xob[0]])[1];
						boxed[2] += "\n";
					}
				}
			}
			boxed[2] += String(box[xob[0]])[4];
			for (topline = 0; topline < parseFloat(boxed[3]) + xob[1] + xob[1]; topline += 1) {
				boxed[2] += String(box[xob[0]])[0];
			}
			boxed[2] += String(box[xob[0]])[5];
			boxed[2] += "\n";
			boxed[0] += boxed[2];
			xob[6] += 1;
		}		
		jQuery('#textresult').val(boxed[0]);
	} else {
		jQuery('#textresult').val(shaped);
	}
}

function justifyText(text, lineLength, rowsPerPage) {
    const paragraphs = text.split('\n');
    const allLines = [];

    for (const para of paragraphs) {
        const words = para.trim().split(/\s+/);
        if (words.length === 0) continue;

        const lines = [];
        let currentLine = [];
        let currentLength = 0;

        // Split paragraph into lines
        for (const word of words) {
            const potentialLength = currentLine.length === 0 
                ? word.length 
                : currentLength + 1 + word.length;

            if (potentialLength <= lineLength) {
                currentLine.push(word);
                currentLength = potentialLength;
            } else {
                lines.push(currentLine);
                currentLine = [word];
                currentLength = word.length;
            }
        }
        if (currentLine.length > 0) lines.push(currentLine);

        // Justify lines
        for (let i = 0; i < lines.length; i++) {
            const lineWords = lines[i];
            let justifiedLine;

            if (i === lines.length - 1) { // Last line of paragraph
                justifiedLine = lineWords.join(' ');
                justifiedLine += ' '.repeat(lineLength - justifiedLine.length);
            } else {
                const totalChars = lineWords.reduce((sum, w) => sum + w.length, 0);
                const totalSpaces = lineLength - totalChars;
                const gaps = lineWords.length - 1;

                if (gaps === 0) {
                    justifiedLine = lineWords[0] + ' '.repeat(totalSpaces);
                } else {
                    const spacePerGap = Math.floor(totalSpaces / gaps);
                    const extraSpaces = totalSpaces % gaps;
                    justifiedLine = '';

                    for (let j = 0; j < lineWords.length; j++) {
                        justifiedLine += lineWords[j];
                        if (j < gaps) {
                            justifiedLine += ' '.repeat(spacePerGap + (j < extraSpaces ? 1 : 0));
                        }
                    }
                }
            }
            allLines.push(justifiedLine.trim());
        }
    }

    // Split into pages
    const pages = [];
    for (let i = 0; i < allLines.length; i += rowsPerPage) {
        pages.push(allLines.slice(i, i + rowsPerPage).join('\n'));
    }
    let shapeout = String(pages.join('\n\n'));
	let allolength = shapeout.split("\n").length;
	jQuery('#pagelength')[0].setAttribute('unlimited', String(allolength));
	let pagelengthelement = document.getElementById('limit-pagelength');
	let defaultmin = parseFloat(jQuery('#pagelength').attr('defaultmin'));
	let defaultmax = parseFloat(jQuery('#pagelength').attr('defaultmax'));
	if (pagelengthelement.checked) {
		jQuery('#pagelength')[0].setAttribute('min', pagelength(jQuery('#pagelength').attr('unlimited')));
		jQuery('#pagelength')[0].setAttribute('max', pagelength(jQuery('#pagelength').attr('unlimited')));
		if (parseFloat(jQuery('#pagelength').val()) != parseFloat(pagelength(jQuery('#pagelength').attr('unlimited')))) {
			jQuery('#pagelength').val(pagelength(jQuery('#pagelength').attr('unlimited')));
		}
		EnableDisable('pagenumbers', [], ['0', '1', '2'], ['3']);
		EnableDisable('alignpagenumbersone', [], ['0', '1'], []);
		EnableDisable('alignpagenumbers', [], ['0', '1', '2'], []);
	} else {
		if (parseFloat(jQuery('#pagelength').val()) > defaultmax) {
			jQuery('#pagelength').val(String(defaultmax));
		} else if (parseFloat(jQuery('#pagelength').val()) < defaultmin) {
			jQuery('#pagelength').val(String(defaultmin));
		}
		jQuery('#pagelength')[0].setAttribute('min', String(defaultmin));
		jQuery('#pagelength')[0].setAttribute('max', String(defaultmax));
		EnableDisable('pagenumbers', ['0', '1', '2'], [], []);
		EnableDisable('alignpagenumbersone', ['0', '1'], [], []);
		EnableDisable('alignpagenumbers', ['0', '1', '2'], [], []);
	}
	
    return shapeout; // Use form feed for page separation
}

function goeson(previousregister, actualregister) {
	if (previousregister == actualregister) {
		return true;
	} else {
		return false;
	}
}

function getWhole() {
	let attribute_name = '';
	if (document.getElementById('invert-words').checked) {
		attribute_name += "I";
	} else {
		attribute_name += "O";
	}
	if (document.getElementById('invert-sentences').checked) {
		attribute_name += "I";
	} else {
		attribute_name += "O";
	}
	if (document.getElementById('invert-paragraphs').checked) {
		attribute_name += "I";
	} else {
		attribute_name += "O";
	}
	if (document.getElementById('invert-whole').checked) {
		attribute_name += "I";
	} else {
		attribute_name += "O";
	}
	jQuery("#textentry")[0].setAttribute('whole', justifyText(String(document.getElementById('textentry').getAttribute(attribute_name)), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val())));
}

function countthatword(regtype) {
	if (regtype == 'arabic') {
		return true
	} else if (regtype == 'hebrew') {
		return true
	} else if (regtype == 'turkce') {
		return true
	} else if (regtype == 'arnums') {
		return true
	} else if (regtype == 'innums') {
		return true
	} else {
		return false
	}
}

function superreverse(text, regtype) {
	let reversetext = '';
	if (regtype == 'arabic' || regtype == 'hebrew') {
		let temp;
		for (let j = 0; j < text.length; j += 1) {
			if (saf(text[j], "", 1) == text[j]) {
				let c = 1;
				temp = text[j];
				while (!(saf(text[j + c], "", 1) != "" || !(j + c < text.length))) {
					temp += text[j + c];
					c++;
				}
				reversetext = temp + reversetext;
			}
		}
	} else if (regtype == "turkce" || regtype == "arnums" || regtype == "innums") {
		for (let j = text.length - 1; j >= 0; j--) {
			reversetext += text[j];
		}
	} else {
		reversetext = text;
	}
	return reversetext;
}

function applychanges(text, regtype, invert) {
	let mademold = '';
	if (invert) {
		if (countthatword(regtype)) {
			if (!document.getElementById('wordscounts')) {
				mademold = `<p class="lettercountline">
				<label for="wordscounts"><span class="countlabel" turkishcontent="Kelimeler" englishcontent="Words">Kelimeler</span></label><input readonly id="wordscounts" name="wordscounts" class="countline" type="number" value="0">
				</p>`;
				jQuery("#spellresults").append(mademold);
			}
			jQuery('#wordscounts').val(parseFloat(jQuery('#wordscounts').val()) + 1);
		}
		if (regtype == 'rubbish') {
			return '';
		} else {
			return superreverse(text, regtype);
		}
	} else {
		if (regtype == 'rubbish') {
			return '';
		} else {
			return text;
		}
	}
}

function thenewlinelength(text) {
	if (text != null) {
		let thematch = String(text).replace(/[\u0591-\u05BF\u0610-\u061A\u064B-\u065F\u06C1-\u06C3\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u0670]+,/g, "");
		let lamaleef = thematch.replace(/[لا],/g, "ل");
		if (thematch != null) {
			return lamaleef.length
		} else {
			return String(text).length
		}
	} else {
		return 0
	}
}

function setDataType(EnteredData, needs) {
	let RegularExpressions = [];
	let arabic = '\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFﭖﭺﮊﮒﻻﯓ';
	let hebrew = '\u0590-\u05FF\uFB2A-\uFB4E';
	let turkce = 'a-zA-ZĞÜŞİÖÇığüşöç';
	let arnums = '0-9';
	let innums = '\u0660-\u0669';
	let emptie = '\ \t';
	let enders = '\.\!\?';
	let hareke = "\u0591-\u05BF\u0610-\u061A\u064B-\u065F\u06C1-\u06C3\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u0670";
	RegularExpressions.push(arabic, hebrew, turkce, arnums, innums, emptie, enders);
	if (!(!(0 <= needs) || !(needs < 8))) {
		return RegularExpressions[needs]
	} else {
		let Quantities = [];
		if (EnteredData.trim() == "") {
			if (needs == 8) {
				return 0
			} else {
				return RegularExpressions[0]
			}
		}
		for (let x = 0; x < RegularExpressions.length; x += 1) {
			let StringIsNow = '[' + RegularExpressions[x] + ']';
			let RegexIsNow = new RegExp(StringIsNow, 'g');
			let MatchIsNow = EnteredData.match(RegexIsNow);
			let LengthSNow = 0;
			if (MatchIsNow == null) {
				LengthSNow = 0
			} else {
				LengthSNow = MatchIsNow.length
			}
			Quantities.push(LengthSNow)
		}
		let LargestData = largest(Quantities);
		for (let l = 0; l < Quantities.length; l += 1) {
			if (LargestData == Quantities[l]) {
				if (needs == 8) {
					return l
				} else {
					return RegularExpressions[l]
				}
			}
		}
	}
}

function largest(mainArray) {
	return Math.max.apply(null, mainArray)
}

function countnow(entry) {
	let linel = parseFloat(jQuery('#linelength').val());
	let pagel = parseFloat(pagelength(jQuery('#pagelength').attr('unlimited')));
	let moldmade = `<textarea id='textresult' readonly autocorrect='off' autocapitalize='off' spellcheck='false' tabindex='0'></textarea>
	<p></p>
	<h2 turkishcontent="Sayım sonuçları" englishcontent="Count results">Sayım sonuçları</h2>`;
	let mademold = '';
	let charco = 0;
	let arabic = 0;
	let hebrew = 0;
	let turkce = 0;
	let arnums = 0;
	let innums = 0;
	let emptie = 0;
	let enders = 0;
	let ofelse = 0;
	let wordis = 0;
	let sentis = 0;
	let parais = 0;
	let begunt = 0;
	let rubbish = 0;
	let word = '';
	let wordout = '';
	let wholetext = '';
	let whole = '';
	let paragraph = '';
	let sentences = '';
	let regtype = '';
	let previous = '';
	let previousreg = '';
	let sentenceready = false;
	let paragraphready = false;
	let word_sentences = '';
	let word_inverted_sentences = '';
	let word_sentences_inverted = '';
	let word_inverted_sentences_inverted = '';
	let word_sentences_paragraph = '';
	let word_inverted_sentences_paragraph = '';
	let word_sentences_inverted_paragraph = '';
	let word_inverted_sentences_inverted_paragraph = '';
	let word_sentences_paragraph_inverted = '';
	let word_inverted_sentences_paragraph_inverted = '';
	let word_sentences_inverted_paragraph_inverted = '';
	let word_inverted_sentences_inverted_paragraph_inverted = '';
	let word_sentences_paragraph_whole = '';
	let word_inverted_sentences_paragraph_whole = '';
	let word_sentences_inverted_paragraph_whole = '';
	let word_inverted_sentences_inverted_paragraph_whole = '';
	let word_sentences_paragraph_inverted_whole = '';
	let word_inverted_sentences_paragraph_inverted_whole = '';
	let word_sentences_inverted_paragraph_inverted_whole = '';
	let word_inverted_sentences_inverted_paragraph_inverted_whole = '';
	let word_sentences_paragraph_whole_inverted = '';
	let word_inverted_sentences_paragraph_whole_inverted = '';
	let word_sentences_inverted_paragraph_whole_inverted = '';
	let word_inverted_sentences_inverted_paragraph_whole_inverted = '';
	let word_sentences_paragraph_inverted_whole_inverted = '';
	let word_inverted_sentences_paragraph_inverted_whole_inverted = '';
	let word_sentences_inverted_paragraph_inverted_whole_inverted = '';
	let word_inverted_sentences_inverted_paragraph_inverted_whole_inverted = '';
	jQuery("#spellresults").html("");
	jQuery("#letterresults").html("");
	if (jQuery('#textentry').val() != '') {
		if (!document.getElementById('textresult')) {
			jQuery("#spellresults").append(moldmade);
		}
	}
	if (jQuery('#textentry').val() != "") {
		for (let i = 0; i < entry.length; i += 1) {
			regtype = '';
			for (let c = 0; c < 7; c += 1) {
				let n;
				let passiveregex = new RegExp('(^[' + setDataType(entry[i], c) + ']+)$', 'g');
				if (n = entry[i].match(passiveregex)) {
					charco += 1;
					if (c < 5) {
						begunt = 1;
					}
					if (c == 0) {
						regtype = "arabic";
						if (!document.getElementById('arabiccounts')) {
							mademold = `<p class="lettercountline">
						<label for="arabiccounts"><span class="countlabel" turkishcontent="Arap" englishcontent="Arabic">Arap</span></label>
						<input readonly id="arabiccounts" name="arabiccounts" class="countline" type="number" value="0">
						</p>`;
							jQuery("#spellresults").append(mademold);
						}
						jQuery('#arabiccounts').val(parseFloat(jQuery('#arabiccounts').val()) + 1);
					}
					if (c == 1) {
						regtype = "hebrew";
						if (!document.getElementById('hebrewcounts')) {
							mademold = `<p class="lettercountline">
						<label for="hebrewcounts"><span class="countlabel" turkishcontent="İbrani" englishcontent="Hebrew">İbrani</span></label>
						<input readonly id="hebrewcounts" name="hebrewcounts" class="countline" type="number" value="0">
						</p>`;
							jQuery("#spellresults").append(mademold);
						}
						jQuery('#hebrewcounts').val(parseFloat(jQuery('#hebrewcounts').val()) + 1);
					}
					if (c == 2) {
						regtype = "turkce";
						if (!document.getElementById('turkcecounts')) {
							mademold = `<p class="lettercountline">
						<label for="turkcecounts"><span class="countlabel" turkishcontent="Türkçe" englishcontent="Turkish">Türkçe</span></label>
						<input readonly id="turkcecounts" name="turkcecounts" class="countline" type="number" value="0">
						</p>`;
							jQuery("#spellresults").append(mademold);
						}
						jQuery('#turkcecounts').val(parseFloat(jQuery('#turkcecounts').val()) + 1);
					}
					if (c == 3) {
						regtype = "arnums";
						if (!document.getElementById('arnumscounts')) {
							mademold = `<p class="lettercountline">
						<label for="arnumscounts"><span class="countlabel" turkishcontent="Arap rakamları" englishcontent="Arabic numerals">Arap rakamları</span></label>
						<input readonly id="arnumscounts" name="arnumscounts" class="countline" type="number" value="0">
						</p>`;
							jQuery("#spellresults").append(mademold);
						}
						jQuery('#arnumscounts').val(parseFloat(jQuery('#arnumscounts').val()) + 1);
					}
					if (c == 4) {
						regtype = "innums";
						if (!document.getElementById('innumscounts')) {
							mademold = `<p class="lettercountline">
						<label for="innumscounts"><span class="countlabel" turkishcontent="Hint rakamları" englishcontent="Indian numerals">Hint rakamları</span></label>
						<input readonly id="innumscounts" name="innumscounts" class="countline" type="number" value="0">
						</p>`;
							jQuery("#spellresults").append(mademold);
						}
						jQuery('#innumscounts').val(parseFloat(jQuery('#innumscounts').val()) + 1);
					}
					if (c == 5) {
						emptie += 1;
						if (begunt > 0) {
							regtype = "emptie";
							wordis += 1;
						} else {
							rubbish += 1;
							regtype = "rubbish";
						}
					}
					if (c == 6 || i == entry.length - 1) {
						enders += 1;
						if (begunt > 0) {
							if (regtype == '') {
								regtype = "enders";
							}
							sentis += 1;
						} else {
							if (regtype == '') {
								rubbish += 1;
								regtype = "rubbish";
							}
						}
					}
				}
			}
			if (!(previous != '\n' || entry[i] != '\n')) {
				regtype = "parais";
				parais += 1;
			} else if (entry[i] == '\n') {
				regtype = "endlin";
				wordis += 1;
			}
			if (regtype == '') {
				ofelse += 1;
				regtype = "ofelse";
			}
			charco += 1;
			if (!document.getElementById('charcounts')) {
				mademold = `<p class="lettercountline">
				<label for="charcounts"><span class="countlabel" turkishcontent="Karakterler" englishcontent="Characters">Karakterler</span></label>
				<input readonly id="charcounts" name="innumscounts" class="countline" type="number" value="0">
				</p>`;
				jQuery("#spellresults").append(mademold);
			}
			jQuery('#charcounts').val(parseFloat(jQuery('#charcounts').val()) + 1);
			if (i == 0 || word == '') {
				previousreg = regtype;
			}
			if (goeson(previousreg, regtype)) {
				if (regtype != "parais") {
					word += entry[i];
				}
				if (i == entry.length - 1) {
					wordout = applychanges(word, previousreg, false);
					wordout_inverted = applychanges(word, previousreg, true)
					word = '';
				}
			} else {
				if (i == entry.length - 1) {
					if (regtype != "parais") {
						wordout = applychanges(word, previousreg, false);
						wordout_inverted = applychanges(word, previousreg, true)
						wordout += entry[i];
					}
				} else {
					wordout = applychanges(word, previousreg, false);
					wordout_inverted = applychanges(word, previousreg, true)
					word = entry[i];
				}
			}
			if (wordout != '' || previousreg == "parais") {
				if (previousreg == "enders" || previousreg == "endlin" || i == entry.length - 1) {
					if (previousreg == "endlin") {
						word_sentences_inverted += wordout;
						word_inverted_sentences_inverted += wordout_inverted;
					} else if (previousreg == "ofelse") {
						word_sentences_inverted += wordout;
						word_inverted_sentences_inverted += wordout_inverted;
					} else if (previousreg == "parais") {
						word_sentences_inverted += wordout;
						word_inverted_sentences_inverted += wordout_inverted;
					} else {
						word_sentences_inverted = wordout + word_sentences_inverted;
						word_inverted_sentences_inverted = wordout_inverted + word_inverted_sentences_inverted;
					}
					word_sentences += wordout;
					word_inverted_sentences += wordout_inverted;
					wordout_inverted = '';
					wordout = '';
					sentenceready = true;
				} else {
					if (previousreg == "ofelse") {
						word_sentences_inverted += wordout;
						word_inverted_sentences_inverted += wordout_inverted;
					} else if (previousreg == "parais") {
						word_sentences_inverted += wordout;
						word_inverted_sentences_inverted += wordout_inverted;
					} else {
						word_sentences_inverted = wordout + word_sentences_inverted;
						word_inverted_sentences_inverted = wordout_inverted + word_inverted_sentences_inverted;
					}
					word_sentences += wordout;
					word_inverted_sentences += wordout_inverted;
					wordout_inverted = '';
					wordout = '';
					sentenceready = false;
				}
			}
			if (sentenceready) {
				if (previousreg == "parais" || i == entry.length - 1) {
					if (previousreg == "enders") {
						word_sentences_paragraph_inverted += word_sentences;
						word_inverted_sentences_paragraph_inverted += word_inverted_sentences;
						word_sentences_inverted_paragraph_inverted += word_sentences_inverted;
						word_inverted_sentences_inverted_paragraph_inverted += word_inverted_sentences_inverted;
					} else if (previousreg == "endlin") {
						word_sentences_paragraph_inverted += word_sentences;
						word_inverted_sentences_paragraph_inverted += word_inverted_sentences;
						word_sentences_inverted_paragraph_inverted += word_sentences_inverted;
						word_inverted_sentences_inverted_paragraph_inverted += word_inverted_sentences_inverted;
					} else if (previousreg == "parais") {
						word_sentences_paragraph_inverted += word_sentences;
						word_inverted_sentences_paragraph_inverted += word_inverted_sentences;
						word_sentences_inverted_paragraph_inverted += word_sentences_inverted;
						word_inverted_sentences_inverted_paragraph_inverted += word_inverted_sentences_inverted;
					} else {
						word_sentences_paragraph_inverted = word_sentences + word_sentences_paragraph_inverted;
						word_inverted_sentences_paragraph_inverted = word_inverted_sentences + word_inverted_sentences_paragraph_inverted;
						word_sentences_inverted_paragraph_inverted = word_sentences_inverted + word_sentences_inverted_paragraph_inverted;
						word_inverted_sentences_inverted_paragraph_inverted = word_inverted_sentences_inverted + word_inverted_sentences_inverted_paragraph_inverted;
					}
					word_sentences_paragraph += word_sentences;
					word_inverted_sentences_paragraph += word_inverted_sentences;
					word_sentences_inverted_paragraph += word_sentences_inverted;
					word_inverted_sentences_inverted_paragraph += word_inverted_sentences_inverted;
					word_sentences = '';
					word_inverted_sentences = '';
					word_sentences_inverted = '';
					word_inverted_sentences_inverted = '';
					sentenceready = false;
					paragraphready = true;
				} else {
					if (previousreg == "enders") {
						word_sentences_paragraph_inverted += word_sentences;
						word_inverted_sentences_paragraph_inverted += word_inverted_sentences;
						word_sentences_inverted_paragraph_inverted += word_sentences_inverted;
						word_inverted_sentences_inverted_paragraph_inverted += word_inverted_sentences_inverted;
					} else if (previousreg == "endlin") {
						word_sentences_paragraph_inverted += word_sentences;
						word_inverted_sentences_paragraph_inverted += word_inverted_sentences;
						word_sentences_inverted_paragraph_inverted += word_sentences_inverted;
						word_inverted_sentences_inverted_paragraph_inverted += word_inverted_sentences_inverted;
					} else {
						word_sentences_paragraph_inverted = word_sentences + word_sentences_paragraph_inverted;
						word_inverted_sentences_paragraph_inverted = word_inverted_sentences + word_inverted_sentences_paragraph_inverted;
						word_sentences_inverted_paragraph_inverted = word_sentences_inverted + word_sentences_inverted_paragraph_inverted;
						word_inverted_sentences_inverted_paragraph_inverted = word_inverted_sentences_inverted + word_inverted_sentences_inverted_paragraph_inverted;
					}
					word_sentences_paragraph += word_sentences;
					word_inverted_sentences_paragraph += word_inverted_sentences;
					word_sentences_inverted_paragraph += word_sentences_inverted;
					word_inverted_sentences_inverted_paragraph += word_inverted_sentences_inverted;
					word_sentences = '';
					word_inverted_sentences = '';
					word_sentences_inverted = '';
					word_inverted_sentences_inverted = '';
					sentenceready = false;
					paragraphready = false;
				}
			}
			if (paragraphready) {
				if (i < entry.length) {
					word_sentences_paragraph_whole += word_sentences_paragraph;
					word_inverted_sentences_paragraph_whole += word_inverted_sentences_paragraph;
					word_sentences_inverted_paragraph_whole += word_sentences_inverted_paragraph;
					word_inverted_sentences_inverted_paragraph_whole += word_inverted_sentences_inverted_paragraph;
					word_sentences_paragraph_inverted_whole += word_sentences_paragraph_inverted;
					word_inverted_sentences_paragraph_inverted_whole += word_inverted_sentences_paragraph_inverted;
					word_sentences_inverted_paragraph_inverted_whole += word_sentences_inverted_paragraph_inverted;
					word_inverted_sentences_inverted_paragraph_inverted_whole += word_inverted_sentences_inverted_paragraph_inverted;
					word_sentences_paragraph = '';
					word_inverted_sentences_paragraph = '';
					word_sentences_inverted_paragraph = '';
					word_inverted_sentences_inverted_paragraph = '';
					word_sentences_paragraph_inverted = '';
					word_inverted_sentences_paragraph_inverted = '';
					word_sentences_inverted_paragraph_inverted = '';
					word_inverted_sentences_inverted_paragraph_inverted = '';
					paragraphready = false;
				}
			}
			if (i == entry.length - 1) {
				word_sentences_paragraph_whole = word_sentences_paragraph_whole.trim();
				word_inverted_sentences_paragraph_whole = word_inverted_sentences_paragraph_whole.trim();
				word_sentences_inverted_paragraph_whole = word_sentences_inverted_paragraph_whole.trim();
				word_inverted_sentences_inverted_paragraph_whole = word_inverted_sentences_inverted_paragraph_whole.trim();
				word_sentences_paragraph_inverted_whole = word_sentences_paragraph_inverted_whole.trim();
				word_inverted_sentences_paragraph_inverted_whole = word_inverted_sentences_paragraph_inverted_whole.trim();
				word_sentences_inverted_paragraph_inverted_whole = word_sentences_inverted_paragraph_inverted_whole.trim();
				word_inverted_sentences_inverted_paragraph_inverted_whole = word_inverted_sentences_inverted_paragraph_inverted_whole.trim();
				word_sentences_paragraph_whole_inverted = word_sentences_paragraph_whole.split("").reverse().join("");
				word_inverted_sentences_paragraph_whole_inverted = word_inverted_sentences_paragraph_whole.split("").reverse().join("");
				word_sentences_inverted_paragraph_whole_inverted = word_sentences_inverted_paragraph_whole.split("").reverse().join("");
				word_inverted_sentences_inverted_paragraph_whole_inverted = word_inverted_sentences_inverted_paragraph_whole.split("").reverse().join("");
				word_sentences_paragraph_inverted_whole_inverted = word_sentences_paragraph_inverted_whole.split("").reverse().join("");
				word_inverted_sentences_paragraph_inverted_whole_inverted = word_inverted_sentences_paragraph_inverted_whole.split("").reverse().join("");
				word_sentences_inverted_paragraph_inverted_whole_inverted = word_sentences_inverted_paragraph_inverted_whole.split("").reverse().join("");
				word_inverted_sentences_inverted_paragraph_inverted_whole_inverted = word_inverted_sentences_inverted_paragraph_inverted_whole.split("").reverse().join("");
			}
			previousreg = regtype;
			if (jQuery("#letterschs").val() != "") {
				let letrs = jQuery("#letterschs").val();
				mademold = '';
				for (let s = 0; s < letrs.length; s += 1) {
					if (entry[i] == letrs[s]) {
						if (!document.getElementById('lettercountlinefor' + String(s))) {
							mademold = `<p class="lettercountline">
					<label for="lettercountlinefor${String(s)}"><span class="countlabel">[ ${String(letrs[s])} ]</span></label>
					<input readonly id="lettercountlinefor${String(s)}" name="lettercountlinefor${String(s)}" class="countline" type="number" value="0">
					</p>`;
							jQuery("#letterresults").append(mademold);
						}
						let hillvalley = parseFloat(jQuery('#lettercountlinefor' + String(s)).val());
						jQuery('#lettercountlinefor' + String(s)).val(hillvalley + 1);
					}
				}
			}
		}
	}
	jQuery("#textentry")[0].setAttribute('IIII', word_inverted_sentences_inverted_paragraph_inverted_whole_inverted);
	jQuery("#textentry")[0].setAttribute('IIIO', word_inverted_sentences_inverted_paragraph_inverted_whole);
	jQuery("#textentry")[0].setAttribute('IOIO', word_inverted_sentences_paragraph_inverted_whole);
	jQuery("#textentry")[0].setAttribute('IIOO', word_inverted_sentences_inverted_paragraph_whole);
	jQuery("#textentry")[0].setAttribute('IIOI', word_inverted_sentences_inverted_paragraph_inverted_whole);
	jQuery("#textentry")[0].setAttribute('IOII', word_inverted_sentences_paragraph_inverted_whole_inverted);
	jQuery("#textentry")[0].setAttribute('IOOI', word_inverted_sentences_paragraph_whole_inverted);
	jQuery("#textentry")[0].setAttribute('IOOO', word_inverted_sentences_paragraph_whole);
	jQuery("#textentry")[0].setAttribute('OIII', word_sentences_inverted_paragraph_inverted_whole_inverted);
	jQuery("#textentry")[0].setAttribute('OIIO', word_sentences_inverted_paragraph_inverted_whole);
	jQuery("#textentry")[0].setAttribute('OIOI', word_sentences_inverted_paragraph_whole_inverted);
	jQuery("#textentry")[0].setAttribute('OIOO', word_sentences_inverted_paragraph_whole);
	jQuery("#textentry")[0].setAttribute('OOII', word_sentences_paragraph_inverted_whole_inverted);
	jQuery("#textentry")[0].setAttribute('OOIO', word_sentences_paragraph_inverted_whole);
	jQuery("#textentry")[0].setAttribute('OOOI', word_sentences_paragraph_whole_inverted);
	jQuery("#textentry")[0].setAttribute('OOOO', word_sentences_paragraph_whole);
	if (!(!document.getElementById('arabiccounts') || !document.getElementById('hebrewcounts'))) {
		if (!(jQuery("#linelength")[0].hasAttribute('disabled'))) {
			jQuery("#linelength")[0].setAttribute('disabled', 'disabled');
		}
		if (!(jQuery("#beginpagenumbers")[0].hasAttribute('disabled'))) {
			jQuery("#beginpagenumbers")[0].setAttribute('disabled', 'disabled');
		}
		if (!(jQuery("#pagelength")[0].hasAttribute('disabled'))) {
			jQuery("#pagelength")[0].setAttribute('disabled', 'disabled');
		}
		if (!(jQuery("#limit-linelength")[0].hasAttribute('disabled'))) {
			jQuery("#limit-linelength")[0].setAttribute('disabled', 'disabled');
		}
		if (!(jQuery("#limit-pagelength")[0].hasAttribute('disabled'))) {
			jQuery("#limit-pagelength")[0].setAttribute('disabled', 'disabled');
		}
		if (!(jQuery("#verticalgap")[0].hasAttribute('disabled'))) {
			jQuery("#verticalgap")[0].setAttribute('disabled', 'disabled');
		}
		if (!(jQuery("#horizantalgap")[0].hasAttribute('disabled'))) {
			jQuery("#horizantalgap")[0].setAttribute('disabled', 'disabled');
		}
		EnableDisable('pagenumbers', [], ['0', '1', '2'], ['3']);
		EnableDisable('pageborders', [], ['0', '1', '2', '3', '4', '5'], ['6']);
		EnableDisable('alignpagenumbersone', [], ['0', '1'], []);
		EnableDisable('alignpagenumbers', [], ['0', '1', '2'], []);
	} else {
		if (jQuery("#linelength")[0].hasAttribute('disabled')) {
			jQuery("#linelength").removeAttr('disabled');
		}
		if (jQuery("#beginpagenumbers")[0].hasAttribute('disabled')) {
			jQuery("#beginpagenumbers").removeAttr('disabled');
		}
		if (jQuery("#verticalgap")[0].hasAttribute('disabled')) {
			jQuery("#verticalgap").removeAttr('disabled');
		}
		if (jQuery("#horizantalgap")[0].hasAttribute('disabled')) {
			jQuery("#horizantalgap").removeAttr('disabled');
		}
		if (jQuery("#pagelength")[0].hasAttribute('disabled')) {
			jQuery("#pagelength").removeAttr('disabled');
		}
		if (jQuery("#limit-linelength")[0].hasAttribute('disabled')) {
			jQuery("#limit-linelength").removeAttr('disabled');
		}
		if (jQuery("#limit-pagelength")[0].hasAttribute('disabled')) {
			jQuery("#limit-pagelength").removeAttr('disabled');
		}
		EnableDisable('pagenumbers', ['0', '1', '2'], [], []);
		EnableDisable('pageborders', ['0', '1', '2', '3', '4', '5'], [], []);
		EnableDisable('alignpagenumbersone', ['0', '1'], [], []);
		EnableDisable('alignpagenumbers', ['0', '1', '2'], [], []);
	}
}

function getLanguage() {
	var spelllanguageelem = document.getElementById("spelllanguage");
	var languagevalue = spelllanguageelem.value;
	if (spelllanguageelem !== null || languagevalue !== undefined) {
		return languagevalue
	} else {
		return "turkish"
	}
}

function pretranslate(turkish, english) {
	if (getLanguage() == "turkish") {
		return turkish
	} else if (getLanguage() == "english") {
		return english
	}
}

function translateto(language) {
	var translatables = document.querySelectorAll('#spell-count-checker *');
	window.activelanguage = language;
	for (var i = 0; i < translatables.length; i += 1) {
		if (translatables[i].getAttribute(language + 'content')) {
			var translation = translatables[i].getAttribute(language + 'content');
			translatables[i].innerHTML = translation
		}
	}
	var posttitle = "";
	if (language == "turkish") {
		jQuery('#begin-pagenumbers').attr('title', 'Numaralandırmaya kapak sayfasından başla');
		jQuery('#alignpagenumbersone').attr('title', 'Sayfa numarası yerleştir');
		jQuery('#alignpagenumbers').attr('title', 'Sayfa numarası hizala');
		jQuery('#horizantalgap').attr('title', 'Sağda ve solda boşluklar');
		jQuery('#verticalgap').attr('title', 'Üstte ve altta boşluklar');
		jQuery('#letterschs').attr('title', 'Sayılacak harfler');
		jQuery('#pagenumbers').attr('title', 'Sayfa numaralandırma');
		jQuery('#pageborders').attr('title', 'Kenarlıklar');
		jQuery('#spelllanguage').attr('title', 'Görüntüleme dili');
		jQuery('#linelength').attr('title', 'Satır uzunluğu');
		jQuery('#pagelength').attr('title', 'Sayfa uzunluğu');
		jQuery('#limitlinelength').attr('title', '40-80 Sınırını Kaldır');
		jQuery('#limitpagelength').attr('title', 'Sayfalara Bölmeyi Kapat');
		jQuery('#invertwords').attr('title', 'Kelimeleri ters çevir');
		jQuery('#invertsentences').attr('title', 'Cümleleri ters çevir');
		jQuery('#invertparagraphs').attr('title', 'Paragrafları ters çevir');
		jQuery('#invertwhole').attr('title', 'Tümünü ters çevir');
		jQuery('#textentry').attr('placeholder', 'Ayraçlarla ayırarak; Arap, İbrani, Türk harfleriyle; Arap ve Hint rakamlarıyla; veri girilebilir');
		posttitle = "Harf Sayma Aracı";
		replytitle = 'Bir Yorum Ekleyin <small><a rel="nofollow" id="cancel-comment-reply-link" href="' + '/spell-count-checker#respond" style="display:none;">Yanıtı iptal et</a></sma' + 'll>';
		emailnotes = "E-posta adresiniz yayınlanmayacak.";
		requirednote = 'Gerekli alanlar işaretlenmiştir <span class="required">*</span>';
		comment = "Yorum";
		author = "İsim*";
		email = "Eposta*";
		url = "İnternet Sitesi";
		cookieconsent = "Sonraki yorumlarım için ismimi, epostamı ve internet site adresimi bu tarayıcıda" + " kaydet.";
		sendbutton = "Gönder"
	}
	if (language == "english") {
		jQuery('#begin-pagenumbers').attr('title', 'Number the first page');
		jQuery('#alignpagenumbersone').attr('title', 'Locate page numbers');
		jQuery('#alignpagenumbers').attr('title', 'Align page numbers');
		jQuery('#horizantalgap').attr('title', 'Spaces on left and right');
		jQuery('#verticalgap').attr('title', 'Spaces on top and bottom');
		jQuery('#letterschs').attr('title', 'Letters to count');
		jQuery('#pagenumbers').attr('title', 'Page numbering');
		jQuery('#pageborders').attr('title', 'Borders');
		jQuery('#spelllanguage').attr('title', 'Interface language');
		jQuery('#linelength').attr('title', 'Line length');
		jQuery('#pagelength').attr('title', 'Page length');
		jQuery('#limitlinelength').attr('title', 'Remove 40-80 Limit');
		jQuery('#limitpagelength').attr('title', 'Do not divide into pages');
		jQuery('#invertwords').attr('title', 'Reverse words');
		jQuery('#invertsentences').attr('title', 'Reverse sentences');
		jQuery('#invertparagraphs').attr('title', 'Reverse paragraphs');
		jQuery('#invertwhole').attr('title', 'Reverse whole');
		jQuery('#textentry').attr('placeholder', 'Arabic, Hebrew, Turkish letters; Arabic and Indian numbers might be entries seperated by special characters');
		posttitle = "Letter Counter Tool";
		replytitle = 'Leave a Reply<small><a rel="nofollow" id="cancel-comment-reply-link" href="/spel' + 'l-count-checker#respond" style="display:none;">Cancel reply</a></small>';
		emailnotes = "Your email address will not be published.";
		requirednote = 'Required fields are marked <span class="required">*</span>';
		comment = "Comment";
		author = "Name*";
		email = "Email*";
		url = "Website";
		cookieconsent = "Save my name, email, and website in this browser for the next time I comment.";
		sendbutton = "Post Comment"
	}
	jQuery('h1.post-title').html(posttitle);
	jQuery('div#reply-title').html(replytitle);
	jQuery('span#email-notes').html(emailnotes);
	jQuery('span.required-field-message').html(requirednote);
	jQuery('label[for="comment"]').html(comment);
	jQuery('label[for="author"]').html(author);
	jQuery('label[for="email"]').html(email);
	jQuery('label[for="url"]').html(url);
	jQuery('label[for="wp-comment-cookies-consent"]').html(cookieconsent);
	jQuery('input#submit')[0].setAttribute('value', sendbutton);
}
jQuery(document).ready(function() {
	translateto("turkish");
	jQuery("#pageborders").change(function() {
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#pagenumbers").change(function() {
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#beginpagenumbers").change(function() {
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#alignpagenumbers").change(function() {
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#alignpagenumbersone").change(function() {
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#verticalgap").on('input', function() {
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#horizantalgap").on('input', function() {
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("select[name='spelllanguage']").change(function() {
		translateto(jQuery(this).val());
	});
	jQuery("#invert-words").change(function() {
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#invert-sentences").change(function() {
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#invert-paragraphs").change(function() {
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#invert-whole").change(function() {
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#textentry").on('input', function() {
		let entry = String(jQuery("#textentry").val()).replace(/\u200B|\u200A|\u2006|\u2009|\u2008|\u2005|\u2004|\u2007|\u2002|\u2003|\u2800+/g, ' ');
		countnow(entry);
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#letterschs").on('input', function() {
		let entry = String(jQuery("#textentry").val()).replace(/\u200B|\u200A|\u2006|\u2009|\u2008|\u2005|\u2004|\u2007|\u2002|\u2003|\u2800+/g, ' ');
		countnow(entry);
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#linelength").on('input', function() {
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#pagelength").on('input', function() {
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#limit-linelength").change(function() {
		limitlinelength();
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
	jQuery("#limit-pagelength").change(function() {
		limitpagelength();
		getWhole();
		boxandnumberit(String(document.getElementById('textentry').getAttribute('whole')), parseFloat(jQuery('#linelength').val()), parseFloat(jQuery('#pagelength').val()));
	});
});
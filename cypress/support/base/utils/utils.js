/*
 * this will verify the page url
 */
Cypress.Commands.add("verifyUrl", (data, ...flag) => {
  if (flag.length > 0) cy.url().should("include", data);
  else cy.url().should("eq", data);
});

/*
 *
 */
Cypress.Commands.add("iframeLoaded", { prevSubject: "element" }, ($iframe) => {
  const contentWindow = $iframe.prop("contentWindow");
  return new Promise((resolve) => {
    if (contentWindow && contentWindow.document.readyState === "complete") {
      resolve(contentWindow);
    } else {
      $iframe.on("load", () => {
        resolve(contentWindow);
      });
    }
  });
});

/*
 * this will get into the documents on the page
 */
Cypress.Commands.add(
  "getInDocument",
  { prevSubject: "document" },
  (document, selector) => Cypress.$(selector, document)
);

/*
 * this will get into the iframe on the page
 */
Cypress.Commands.add("getWithinIframe", (iframe, targetElement) =>
  cy
    .get(iframe, { timeout: 20000 })
    .iframeLoaded()
    .its("document")
    .getInDocument(targetElement)
);

/*
 * this will get into the iframe by xpath
 */
Cypress.Commands.add("getWithinIframeByXpath", (iframe, targetElement) =>
  cy.xpath(iframe).iframeLoaded().its("document").getInDocument(targetElement)
);

/*
 * this will uncheck the checked checkbox on the page
 */
Cypress.Commands.add("uncheckTheCheckbox", (loc, index) => {
  if (!Cypress.$(loc).eq(index).prop("checked")) {
    cy.log("checkbox is unchecked");
  } else {
    cy.get(loc).eq(index).uncheck({ force: true });
    cy.wait(1000);
  }
});

/*
 * this will click on element on the page using index
 */
Cypress.Commands.add("clickOnElementByIndex", (loc, index) => {
  cy.get(loc, { timeout: 10000 }).eq(index).click({ force: true });
});

/*
 * this will click on element on the page
 */
Cypress.Commands.add("clickOnElement", (loc, ...param) => {
  if (param.length == 1) cy.get(loc).eq(param[0]).click();
  else if (param.length == 2) cy.get(loc).eq(param[0]).click(param[1]);
  else cy.get(loc).click();
});

/*
 * this will click on element by xpath
 */
Cypress.Commands.add("clickOnElementByXpath", (loc) => {
  cy.xpath(loc).click();
});

/*
 * this will click on element by xpath using index
 */
Cypress.Commands.add("clickOnElementByXpathUsingIndex", (loc, index) => {
  cy.xpath(loc).eq(index).click();
});

/*
 * this will verify element on page exists or not
 */
Cypress.Commands.add("verifyElementExistsOrNot", (loc, index, param) => {
  cy.get(loc).eq(index).should(param);
});

/*
 * this will verify element is visible on the page or not
 */
Cypress.Commands.add("verifyElementVisibleOrNot", (loc, index, param) => {
  cy.get(loc).eq(index).should(param);
});

/*
 * this will clear the input fields on page
 */
Cypress.Commands.add("clearInputField", (loc) => {
  cy.get(loc, { timeout: 20000 }).clear();
});

/*
 * this will check the unchecked checkbox
 */
Cypress.Commands.add("checkTheCheckbox", (loc) => {
  if (Cypress.$(loc).prop("checked")) {
    cy.log("checkbox is checked");
  } else {
    cy.clickOnElement(loc, 0, { force: true });
  }
});

/*
 * this will verify the page title
 */
Cypress.Commands.add("verifyPageTitle", (loc, data) => {
  cy.get(loc, { timeout: 20000 }).should("have.text", data);
});

/*
 * this will verify the page Url
 */
Cypress.Commands.add("verifyURL", (data) => {
  cy.url().should("contain", data);
});

/*
 * this will verify validation messages of pages
 */
Cypress.Commands.add("verifyValidationMessage", (loc, data) => {
  cy.get(loc).invoke("text").should("contain", data);
});

/*
 * this will click on element using text data
 */
Cypress.Commands.add("clickOnElementUsingText", (loc, data) => {
  cy.get(loc).contains(data).click();
});

/*
 * here verify any text is available on page
 */
Cypress.Commands.add("verifyTextContains", (loc, data) => {
  cy.get(loc).should("contain", data);
});

/*
 * here verify any text is available on page using xpath
 */
Cypress.Commands.add("verifyElementTextWithXpath", (loc, data) => {
  cy.xpath(loc).should("include.text", data);
});

/*
 * here verify any text is equal to any specific data and return the data
 */
Cypress.Commands.add("verifyTextEqual", (loc, data) => {
  return cy.get(loc, { timeout: 20000 }).should("have.text", data);
});

/*
 * here verify any text is equal to any specific data using index
 */
Cypress.Commands.add("verifyTextEqualWithIndex", (loc, index, data) => {
  cy.get(loc).eq(index).should("have.text", data);
});

/*
 * here verify any element containing specific data as text
 */
Cypress.Commands.add("verifyTextContainWithIndex", (loc, index, data) => {
  cy.get(loc).eq(index).should("contain", data);
});

/*
 * check the check boxes
 */
Cypress.Commands.add("checkMultipleRadioButton", (loc) => {
  cy.get(loc).check({ force: true });
});

/*
 * here verify the validation message on page using index value
 */
Cypress.Commands.add("verifyValidationMessageByIndex", (loc, data, index) => {
  cy.get(loc).eq(index).invoke("text").should("contain", data);
});

/*
 * here verify message appearing on page
 */
Cypress.Commands.add("verifyMessage", (loc, data) => {
  cy.get(loc).invoke("text").should("contain", data);
});

/*
 * click on element using xpath element selector
 */
Cypress.Commands.add("clickUsingXpath", (loc) => {
  cy.xpath(loc).click({ force: true });
});

/*
 * click on element using xpath element selector with index value
 */
Cypress.Commands.add("clickUsingXpathWithIndex", (loc, index) => {
  cy.xpath(loc).eq(index).click({ force: true });
});

/*
 * click on element with an additional parameter with a specific amount of time wait
 */
Cypress.Commands.add("clickOnElementWithWait", (loc, index, wait, para) => {
  cy.wait(wait);
  cy.get(loc).eq(index).click(para);
});

/*
 * select element from dropdown option
 */
Cypress.Commands.add("selectOptionFromSelectElement", (loc, data) => {
  cy.get(loc).then(($select) => {
    const opt = $select.find("option").eq(data);
    cy.log(opt.text());
    cy.wrap($select).select(opt.val());
  });
});

/*
 * select element from dropdown by entering option of data
 */
Cypress.Commands.add("selectOptionwithValue", (loc, data, index) => {
  cy.get(loc).select(data);
});

/*
 * verify element exist on page or not
 */
Cypress.Commands.add("verifyElementExistOrNot", (loc, data) => {
  cy.get(loc).should(data);
});

/*
 * click on data with force
 */
Cypress.Commands.add("clickContainsWithForce", (data) => {
  cy.contains(data).click({ force: true });
});

/*
 * click on text data
 */
Cypress.Commands.add("clickOnTextWithContains", (data) => {
  cy.contains(data).click();
});

/*
 * verify the page data
 */
Cypress.Commands.add("verifyPageContents", (loc, data) => {
  cy.get(loc, { timeout: 20000 }).should("contain", data);
});

/*
 * perform upload file functionality
 */
Cypress.Commands.add("upoadFile", (loc, fileName, mimetype) => {
  cy.fixture(fileName).then((fileContent) => {
    cy.get(loc).upload(
      { fileContent, fileName, mimeType: mimetype },
      { encoding: "utf-8" },
      { subjectType: "input" }
    );
  });
});

/*
 * verify check box status as checked or unchecked
 */
Cypress.Commands.add("verifyCheckboxCheckedOrNot", (loc, index, value) => {
  cy.get(loc).eq(index).should(value);
});

/*
 * verify any element present or not using text data
 */
Cypress.Commands.add("verifyElementExistOrNotUsingText", (loc, data, exist) => {
  cy.get(loc).contains(data).should(exist);
});

/*
 * perform file upload functionality for specific file extension
 */
Cypress.Commands.add("upload_file", (fileName, fileType = " ", selector) => {
  if ((fileType = "pdf")) {
    fileType = "application/pdf";
  } else if ((fileType = "rar")) {
    fileType = "application/x-rar-compressed";
  } else if ((fileType = "xls")) {
    fileType = "application / vnd.ms - excel";
  } else if ((fileType = "doc")) {
    fileType = "application / msword";
  } else if ((fileType = "docx")) {
    fileType = "application / msword";
  }
  return cy.get(selector).then((subject) => {
    cy.fixture(fileName, "base64")
      .then(Cypress.Blob.base64StringToBlob)
      .then((blob) => {
        const el = subject[0];
        const testFile = new File([blob], fileName, {
          type: fileType,
        });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        el.files = dataTransfer.files;
      });
  });
});

/*
 * verify button status as disable using xpath element selectors
 */
Cypress.Commands.add("verifyDisabledButtonsUsingXpath", (loc) => {
  cy.xpath(loc).should("be.disabled");
});

/*
 * verify button status as disable using Css element selectors
 */
Cypress.Commands.add("verifyDisabledButtonsUsingCss", (loc) => {
  cy.get(loc).should("be.disabled");
});

/*
 * verify button status as enabled using xpath element selectors
 */
Cypress.Commands.add("verifyEnabledButtonsUsingXpath", (loc) => {
  cy.xpath(loc).should("be.enabled");
});

/*
 * verify button status as enabled using Css element selectors
 */
Cypress.Commands.add("verifyEnabledButtonsUsingCss", (loc) => {
  cy.get(loc).should("be.enabled");
});

/*
 * verify avaliable dates on page in [MMM, DD, YYYY] format
 */
Cypress.Commands.add("verifyDate", (loc, index, date) => {
  cy.get(loc)
    .eq(index)
    .invoke("text")
    .then((text) => {
      if (
        Cypress.moment(date).isSame(Cypress.moment(text).format("MMM DD, YYYY"))
      ) {
        expect(Cypress.moment(text).format("MMM DD, YYYY")).eq(date);
      } else if (
        Cypress.moment(date).isAfter(
          Cypress.moment(text).format("MMM DD, YYYY")
        )
      ) {
        expect(
          Cypress.moment(date).isAfter(
            Cypress.moment(text).format("MMM DD, YYYY")
          ),
          `${Cypress.moment(date).format(
            "MMM DD, YYYY"
          )} should appear after ${Cypress.moment(text).format("MMM DD, YYYY")}`
        ).to.be.true;
      } else {
        expect(
          Cypress.moment(date).isBefore(
            Cypress.moment(text).format("MMM DD, YYYY")
          ),
          `${Cypress.moment(date).format(
            "MMM DD, YYYY"
          )} should appear before ${Cypress.moment(text).format(
            "MMM DD, YYYY"
          )}`
        ).to.be.true;
      }
    });
});

/*
 * verify element not contains a specified data
 */
Cypress.Commands.add("elementShouldNotContain", (loc, data) => {
  cy.get(loc).should("not.contain", data);
});

/*
 * Input data in text field
 */
Cypress.Commands.add("enterText", (loc, data, ...flag) => {
  if (flag.length == 1) {
    cy.get(loc).eq(flag[0]).type(data);
  } else if (flag.length == 2 && String(flag[1]).includes("clear")) {
    cy.get(loc).eq(flag[0]).clear().type(data);
  } else {
    cy.get(loc).type(data);
  }
});

/*
 * verify url status as 200 OK
 */
Cypress.Commands.add("verifyHrefStatus", (loc, index, data, attribute) => {
  cy.get(loc)
    .eq(index)
    .invoke("attr", attribute)
    .and("include", data)
    .then((href) => {
      cy.log(href);
      cy.request(href).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
});

/*
 * verify deletion confirmation message using text data
 */
Cypress.Commands.add("verifyConfirmMessageOnDelete", (loc, msg) => {
  cy.get(loc.deleteLearningUserCollectionButton)
    .invoke("attr", "data-confirm")
    .should("eq", msg);
});

/*
 * input data in text field after make field clear
 */
Cypress.Commands.add("typeTextInField", (loc, index, data) => {
  cy.get(loc).eq(index).clear({ force: true }).type(data);
});

/*
 * verify element should not exist on page
 */
Cypress.Commands.add("elementShouldNotExist", (loc) => {
  cy.get(loc).should("not.exist").and("not.be.visible");
});

/*
 * verify element should not exist and not visible on page
 */
Cypress.Commands.add("elementShouldNotVisible", (loc) => {
  cy.get(loc).should("not.be.visible");
});

/*
 * verify element should not exist and not visible on page using xpath element selector
 */
Cypress.Commands.add("elementWithXpathShouldNotExist", (loc) => {
  cy.xpath(loc).should("not.exist").and("not.be.visible");
});

/*
 * verify element should available on page
 */
Cypress.Commands.add("elementShouldExist", (loc) => {
  cy.get(loc).should("exist").and("be.visible");
});

/*
 * verify element should available on page using xpath element selector
 */
Cypress.Commands.add("elementWithXpathShouldExist", (loc) => {
  cy.xpath(loc).should("exist").and("be.visible");
});

/*
 * verify text data should available and visible on page
 */
Cypress.Commands.add("textShouldExist", (text) => {
  cy.contains(text, { timeout: 20000 }).should("exist").and("be.visible");
});

/*
 * verify blank field on page
 */
Cypress.Commands.add("verifyBlankValue", (loc, index) => {
  cy.get(loc).eq(index).should("not.have.value");
});

/*
 * verify null value on page
 */
Cypress.Commands.add("verifyNullValue", (loc, index) => {
  cy.get(loc).eq(index).should("be.empty");
});

/*
 * verify form's label name
 */
Cypress.Commands.add("verifyALabelInForm", (loc, index, lebel_text) => {
  cy.get(loc)
    .eq(index)
    .within(() => {
      cy.get("label").should("contain", lebel_text);
    });
});

/*
 * verify element on form
 */
Cypress.Commands.add("verifyAnElementInForm", (loc, index, tag, type = 0) => {
  cy.get(loc)
    .eq(index)
    .within(() => {
      if (type) cy.get(tag).last().should("have.attr", "type", type);
      else cy.get(tag).should("be.exist");
    });
});

/*
 * select the dropdown value using text
 */
Cypress.Commands.add("selectByText", (loc, index, data) => {
  cy.get(loc)
    .eq(index)
    .then(($box) => {
      cy.get($box).select(data);
    });
});

/*
 * verify element containing specified data
 */
Cypress.Commands.add("elementShouldContain", (loc, data) => {
  cy.get(loc).contains(data);
});

/*
 * verify available value of an attributes
 */
Cypress.Commands.add("verifyattributeValue", (loc, attr, value) => {
  cy.get(loc).should(`have.${attr}`, value);
});

/*
 * verify available value of an attributes with an expected value
 */
Cypress.Commands.add("verifyElementAttrValueWithExpect", (loc, atr, value1) => {
  cy.get(loc)
    .invoke("attr", atr)
    .then((value) => {
      expect(value).eq(value1);
    });
});

/*
 * fetch a unique value from array
 */
Cypress.Commands.add("getUniqueValueArray", (givenArray, uniqueValueArray) => {
  cy.wrap(givenArray).each((element) => {
    if (!uniqueValueArray.includes(element)) {
      uniqueValueArray.push(element);
    }
  });
});

/*
 * verify element value using index
 */
Cypress.Commands.add("verifyElementProperty", (loc, index, value) => {
  return cy.get(loc).eq(index).should(value);
});

/*
 * verify element property with multiple parameters using index
 */
Cypress.Commands.add(
  "verifyElementPropertyWithMultipleParameters",
  (loc, index, value1, value2) => {
    return cy.get(loc).eq(index).should(value1, value2);
  }
);

/*
 * verify element property with multiple parameters without using index
 */
Cypress.Commands.add("verifyElementProperty2", (loc, value1, value2) => {
  return cy.get(loc).should(value1, value2);
});

/*
 * verify element is not present on page with a specified wait
 */
Cypress.Commands.add("verifyElementNotExistWithWait", (loc) => {
  cy.get(loc).should("not.exist", { timeout: 20000 });
});

/*
 * verify the sorting performed alphabetically
 */
Cypress.Commands.add("verifyArraySortingAlphabetically", (loc) => {
  var strings = [];
  cy.get(loc).each((elements) => {
    strings.push(elements.text());
  });
  cy.wrap(strings).should("to.deep.eq", strings.sort()); // you may need deep equal here instead
});

/*
 * verify the length of any element
 */
Cypress.Commands.add("verifyLengthAtLeast", (loc, value) => {
  cy.get(loc).its("length").should("be.at.least", value);
});

/*
 * remove any target attribute on an element
 */
Cypress.Commands.add("removeAttrOfElement", (loc, index, attr) => {
  cy.get(loc).eq(index).invoke("removeAttr", attr);
});

/*
 * update any target attribute on an element
 */
Cypress.Commands.add("updateAttrOfElement", (loc, index, attr, value) => {
  cy.get(loc).eq(index).invoke("attr", attr, value);
});

/*
 * upload file of any file extensions
 */
Cypress.Commands.add("uploadFileFunction", (loc, fileName, mimetype) => {
  cy.fixture(fileName, "binary")
    .then(Cypress.Blob.binaryStringToBlob)
    .then((fileContent) => {
      cy.get(loc).attachFile({
        fileContent,
        filePath: fileName,
        encoding: "utf-8",
      });
    });
});

/*
 * verify non-empty elements
 */
Cypress.Commands.add("verfyElementIsNotEmpty", (loc, index) => {
  cy.get(loc).eq(index).should("not.to.empty");
});

/*
 * verify the exact length of element
 */
Cypress.Commands.add("verifyLengthOfElementOnUserPage", (loc, value) => {
  cy.get(loc).its("length").should("be.eq", value);
});

/*
 * this will verify the disabled button on the page using xpath
 */
Cypress.Commands.add("verifyDisabledButtonsUsingXpath", (loc) => {
  cy.xpath(loc).should("be.disabled");
});

/*
 * this will verify the disabled button on the page
 */
Cypress.Commands.add("verifyDisabledButtonsUsingCss", (loc) => {
  cy.get(loc).should("be.disabled");
});

/*
 * element visible
 */
Cypress.Commands.add("elementVisible", (ele) => {
  cy.get(ele).should("be.visible");
});

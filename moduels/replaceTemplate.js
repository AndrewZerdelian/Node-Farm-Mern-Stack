const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%productName%}/g, product.productName);
  output = output.replace(/{%image%}/g, product.image);
  output = output.replace(/{%price%}/g, product.price);
  output = output.replace(/{%from%}/g, product.from);
  output = output.replace(/{%nutrients%}/g, product.nutrients);
  output = output.replace(/{%quantity%}/g, product.quantity);
  output = output.replace(/{%description%}/g, product.description);
  output = output.replace(/{%id%}/g, product.id);

  if (!product.organic) {
    output = output.replace(/{%not-organic%}/g, `not-organic`);
  }

  return output;
};

module.exports = replaceTemplate;

/**
 * Explanation:
Function Definition: replaceTemplate takes a template (temp) and a product object (product).
String Replacement: The function uses replace to substitute placeholders 
(like {%productName%}) in the template with actual product values.
Conditional Replacement: If the product is not organic, it replaces {%not-organic%} with not-organic.
Export: The function is exported so it can be used in other files.
 */

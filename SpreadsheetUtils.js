class SpreadsheetUtils {

  constructor(id) {
    this.ss = SpreadsheetApp.openById(id);
  }

  /**
   * シートのデータをJSONとして取得する
   * @param {string} name シート名
   * @returns 
   */
  getSheetAsJson(name) {
    const sheet = this.ss.getSheetByName(name);
    const values = sheet.getDataRange().getValues();
    const headers = values.shift();
    const json = values.map((value) => {
      const row = {};
      headers.forEach((header, i) => {
        row[String(header)] = value[i];
      });
      return row;
    });
    return json;
  }
}

module.exports = SpreadsheetUtils;
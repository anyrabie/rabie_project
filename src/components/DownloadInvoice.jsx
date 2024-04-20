import React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  section: {
    margin: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 5,
  },
});
export const DownloadInvoice = ({ items, cartTotal, totalItems } ) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Facture</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>Nom de l'article</Text>
            <Text style={styles.tableCell}>Quantité</Text>
            <Text style={styles.tableCell}>Prix</Text>
            <Text style={styles.tableCell}>Total</Text>
          </View>
          {items.map((item) => (
            <View style={styles.tableRow} key={item.id}>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>{item.quantity}</Text>
              <Text style={styles.tableCell}>{item.price}DA</Text>
              <Text style={styles.tableCell}>{item.quantity * item.price}DA</Text>
            </View>
          ))}
          <Text style={{ marginTop: 20, textAlign: 'right' }}>
            Total des articles : {totalItems}
          </Text>
          <Text style={{ marginTop: 5, textAlign: 'right' }}>
            Montant total : {cartTotal}DA
          </Text>
        </View>
      </Page>
    </Document>
  )
}

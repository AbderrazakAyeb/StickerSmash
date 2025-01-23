import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StickerSmash</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>
          This innovative photo-editing app allows users to personalize their images with fun and creative stickers. Select a photo from your gallery, add stickers or emojis, and save your customized masterpiece with ease.
        </Text>
        <Text style={styles.text}>
          The app combines seamless image selection, intuitive editing tools, and robust saving capabilities to bring your creative vision to life. Whether for fun, memes, or enhancing your photos, this app is perfect for adding that extra flair to your images!
        </Text>
        <Text style={styles.subTitle}>Key Features:</Text>
        <Text style={styles.text}>
          • Effortlessly select photos from your library.{"\n"}
          • Add a variety of stickers to your images.{"\n"}
          • Save your edited photos directly to your device.{"\n"}
          • Simple and user-friendly interface.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e", // Dark background for modern aesthetic
    padding: 20,               // Adds padding around the edges
  },
  title: {
    fontSize: 32,               // Larger font size for emphasis
    fontWeight: "bold",         // Bold for prominence
    color: "#00aaff",           // Vibrant Electric Blue
    textAlign: "center",        // Centers the title
    marginTop: 20,              // Adds spacing at the top
    marginBottom: 10,           // Adds spacing below the title
    letterSpacing: 1.5,         // Slightly more letter spacing for a premium look
    textTransform: "uppercase", // Makes the title stand out
  },
  subTitle: {
    fontSize: 20,               // Slightly smaller than the main title
    fontWeight: "600",          // Semi-bold for hierarchy
    color: "#00aaff",           // Matches the title color
    marginTop: 20,              // Space above the subtitle
    marginBottom: 10,           // Space below the subtitle
  },
  text: {
    fontSize: 16,               // Easy-to-read font size
    color: "#e0e0e0",           // Softer white for readability on dark backgrounds
    lineHeight: 24,             // Proper line height for better text flow
    textAlign: "justify",       // Justify text for a clean appearance
    marginBottom: 15,           // Spacing between paragraphs
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "stretch",      // Ensures content fills width while staying structured
  },
});

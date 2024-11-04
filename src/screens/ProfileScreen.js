import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Platform,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileScreen = () => {
  const menuItems = [
    {
      icon: 'person-outline',
      label: 'Edit Profile',
      iconColor: '#007AFF',
      iconBg: '#E5F2FF'
    },
    {
      icon: 'key-outline',
      label: 'Change Password',
      iconColor: '#FF9500',
      iconBg: '#FFF4E5'
    },
    {
      icon: 'card-outline',
      label: 'Payment',
      iconColor: '#34C759',
      iconBg: '#E8F8ED'
    },
    {
      icon: 'star-outline',
      label: 'My Reviews',
      iconColor: '#5856D6',
      iconBg: '#EEEEFF'
    },
    {
      icon: 'settings-outline',
      label: 'Settings',
      iconColor: '#8E8E93',
      iconBg: '#F2F2F7'
    }
  ];

  const bugReportTypes = [
    {
      icon: 'bug-outline',
      label: 'Report Technical Issue',
      description: 'Having technical problems? Let us know.',
      color: '#FF3B30'
    },
    {
      icon: 'warning-outline',
      label: 'Report Content',
      description: 'Found inappropriate content?',
      color: '#FF9500'
    },
    {
      icon: 'help-circle-outline',
      label: 'Feature Request',
      description: 'Suggest new features or improvements.',
      color: '#34C759'
    }
  ];

  const MenuItem = ({ icon, label, iconColor, iconBg }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={22} color={iconColor} />
      </View>
      <Text style={styles.menuText}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
    </TouchableOpacity>
  );

  const BugReportItem = ({ icon, label, description, color }) => (
    <TouchableOpacity style={styles.bugReportItem}>
      <View style={[styles.bugReportIcon, { backgroundColor: `${color}15` }]}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <View style={styles.bugReportContent}>
        <Text style={styles.bugReportLabel}>{label}</Text>
        <Text style={styles.bugReportDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.contentWrapper}>
            <View style={styles.profileSection}>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Zhazted Valles</Text>
                <Text style={styles.userLocation}>Computer Science Student</Text>
              </View>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }}
                style={styles.profileImage}
              />
            </View>
          </View>
        </View>

        <View style={styles.contentWrapper}>
          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}

            {/* Separate Logout Button */}
            <TouchableOpacity style={styles.logoutButton}>
              <View style={[styles.iconContainer, { backgroundColor: '#FFE5E5' }]}>
                <Ionicons name="log-out-outline" size={22} color="#FF3B30" />
              </View>
              <Text style={styles.logoutText}>Log Out</Text>
              <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          </View>

          {/* Bug Report Section */}
          <View style={styles.bugReportContainer}>
            <View style={styles.bugReportHeader}>
              <Text style={styles.sectionTitle}>Report a Bug</Text>
              <Text style={styles.sectionSubtitle}>Help us improve your experience</Text>
            </View>
            {bugReportTypes.map((item, index) => (
              <BugReportItem key={index} {...item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#CBDCEB',
    flex: 1,
  },
  container: {
    backgroundColor: '#CBDCEB',
  },
  contentWrapper: {
    width: '92%',
    alignSelf: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 20,
    width: '100%',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  userLocation: {
    fontSize: 15,
    color: '#666',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 12,
    borderWidth: 3,
    borderColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  logoutText: {
    flex: 1,
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '400',
  },
  bugReportContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bugReportHeader: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  bugReportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  bugReportIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  bugReportContent: {
    flex: 1,
  },
  bugReportLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  bugReportDescription: {
    fontSize: 14,
    color: '#666',
  }
});

export default ProfileScreen;
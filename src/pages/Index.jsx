import { useState } from "react";
import { Container, Box, VStack, HStack, Text, Button, IconButton, Image, Badge, Input, InputGroup, InputRightElement, useToast, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, List, ListItem, ListIcon, Divider, Flex, Spacer, Avatar, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Progress, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { FaBell, FaWallet, FaGift, FaFileInvoiceDollar, FaUserCircle, FaSearch, FaPlus, FaChartLine, FaTrophy, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const toast = useToast();

  const handleSearch = () => {
    toast({
      title: "Search initiated.",
      description: `Searching for: ${searchQuery}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <HStack justifyContent="space-between" mb={4}>
        <HStack>
          <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTU4NDgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" />
          <Heading size="md">Perks Platform</Heading>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Notifications" icon={<FaBell />} />
          <Avatar name="John Doe" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNTg0ODMxOXww&ixlib=rb-4.0.3&q=80&w=1080" />
        </HStack>
      </HStack>

      <HStack spacing={4} mb={4}>
        <Button leftIcon={<FaGift />} colorScheme="teal" onClick={onOpen}>
          Access Perks
        </Button>
        <Button leftIcon={<FaFileInvoiceDollar />} colorScheme="teal">
          Submit Expense
        </Button>
        <Button leftIcon={<FaWallet />} colorScheme="teal">
          View Wallet
        </Button>
      </HStack>

      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <HStack justifyContent="space-between">
            <Text fontSize="xl">Dashboard Overview</Text>
            <IconButton aria-label="Search database" icon={<FaSearch />} onClick={onOpen} />
          </HStack>
          <Divider my={4} />
          <HStack spacing={4}>
            <Stat>
              <StatLabel>Recent Transactions</StatLabel>
              <StatNumber>5</StatNumber>
              <StatHelpText>Last 7 days</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Pending Reimbursements</StatLabel>
              <StatNumber>2</StatNumber>
              <StatHelpText>Awaiting approval</StatHelpText>
            </Stat>
          </HStack>
        </Box>

        <Box p={4} shadow="md" borderWidth="1px">
          <Text fontSize="xl">Notifications</Text>
          <Divider my={4} />
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaBell} color="green.500" />
              New perk available: 20% off at Gym XYZ
            </ListItem>
            <ListItem>
              <ListIcon as={FaBell} color="green.500" />
              Your expense report has been approved
            </ListItem>
            <ListItem>
              <ListIcon as={FaBell} color="green.500" />
              Reminder: Submit your monthly expense report
            </ListItem>
          </List>
        </Box>
      </VStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Perks</DrawerHeader>
          <DrawerBody>
            <InputGroup>
              <Input placeholder="Search for perks" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <InputRightElement>
                <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
              </InputRightElement>
            </InputGroup>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSearch}>
              Search
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Index;

function skillsMember(member) {
    if (!member || !member.skills) {
        return [];
    }
    return member.skills;
}